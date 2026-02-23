# NLP Services

Python Flask backends for RetmeePro's NLP text analysis: **FreeLing** (linguistic morphological analysis) and **BERT** (objective classification using fine-tuned NER models).

## Architecture

```
┌──────────────────────┐
│   Next.js (Vercel)   │
│   /api/nlp/analyze   │──► FreeLing service (:4000)
│   /api/nlp/objective │──► BERT service     (:8000)
│   /api/nlp/health    │──► FreeLing :4000/api/healthcheck
└──────────────────────┘

FreeLing service (:4000)
  └─ Calls FreeLing analyzer_client via subprocess

BERT service (:8000)
  └─ For each category (QUE, PARAQUE, COMO):
       1. Tokenizes text → CoNLL format
       2. Runs HuggingFace NER prediction via subprocess
       3. Returns BIO-tagged predictions
```

## Directory Structure

```
nlp-services/
  freeling/
    app.py              # Flask app (3 endpoints)
    config.py           # Env-based configuration
    requirements.txt
    gunicorn.conf.py    # Port 4000, 4 workers
  bert/
    app.py              # Flask app (2 endpoints)
    config.py           # Env-based configuration + path helpers
    preprocessing.py    # Importable CoNLL tokenizer
    requirements.txt
    gunicorn.conf.py    # Port 8000, 1 worker, 120s timeout
    ner/                # HuggingFace NER scripts (package)
      __init__.py
      run_ner.py
      tasks.py
      utils_ner.py
  labels/               # BIO label files (committed)
    QUE.txt
    COMO.txt
    PARAQUE.txt
  scripts/              # Deployment automation
    setup.sh            # First-time: venvs + deps + validate models
    deploy.sh           # Pull + update deps + restart
    start.sh            # Start gunicorn daemons
    stop.sh             # Graceful shutdown via PID files
    status.sh           # Check running state + health
    logs.sh             # Tail recent logs
```

## Configuration

All configuration is via environment variables. Copy `.env.example` to `.env` and edit:

| Variable | Default | Description |
|----------|---------|-------------|
| `FREELING_HOST` | `0.0.0.0` | FreeLing bind address |
| `FREELING_PORT` | `4000` | FreeLing service port |
| `FREELING_SERVER_PORT` | `50005` | Internal FreeLing analyzer port |
| `FREELING_CONFIG` | `es.cfg` | FreeLing language config |
| `FREELING_TEMP_DIR` | `temp` | Temp dir for analysis files |
| `BERT_HOST` | `0.0.0.0` | BERT bind address |
| `BERT_PORT` | `8000` | BERT service port |
| `BERT_MODELS_BASE` | `/root/nlp-services/models` | Base dir for model folders |
| `BERT_TEMP_DIR` | `/tmp/bert-workdir` | Per-request working directory |
| `BERT_LABELS_DIR` | `../labels` | Path to BIO label files |

### Model directory layout

Each classification category needs this structure under `BERT_MODELS_BASE`:

```
models/
  QUE/
    pretrainedmodelQUE/    # Fine-tuned BERT model
  PARAQUE/
    pretrainedmodelPARAQUE/
  COMO/
    pretrainedmodelCOMO/
```

## Deployment

### First-time setup

```bash
# On the VPS
cd /root/nlp-services    # or wherever you clone this

# Copy and edit environment
cp .env.example .env
nano .env                # Set BERT_MODELS_BASE to your models path

# Run setup (creates venvs, installs deps, validates models)
./scripts/setup.sh

# Start services
./scripts/start.sh

# Verify
./scripts/status.sh
```

### Subsequent deploys

```bash
./scripts/deploy.sh      # Pulls code, updates deps, restarts
```

### Managing services

```bash
./scripts/start.sh       # Start both daemons
./scripts/stop.sh        # Graceful shutdown
./scripts/status.sh      # Check state + health
./scripts/logs.sh        # Tail all logs
./scripts/logs.sh bert   # Tail only BERT logs
./scripts/logs.sh freeling 100  # Last 100 lines of FreeLing logs
```

### Reboot persistence

Add a crontab entry to auto-start on reboot:

```bash
crontab -e
# Add this line:
@reboot cd /root/nlp-services && ./scripts/start.sh >> /root/nlp-services/logs/cron.log 2>&1
```

## API Reference

### FreeLing Service (port 4000)

#### `GET /api/healthcheck`

Check if the FreeLing analyzer is running.

```bash
curl http://localhost:4000/api/healthcheck
# {"status": "OK"} or {"status": "BAD"}
```

#### `GET /api/startfreeling`

Start the FreeLing analyzer server (if not already running).

```bash
curl http://localhost:4000/api/startfreeling
# {"status": "Successfully Started"} or {"status": "Already Started"}
```

#### `POST /api/freeling`

Analyze text with FreeLing morphological analysis.

```bash
curl -X POST http://localhost:4000/api/freeling \
  -H 'Content-Type: application/json' \
  -d '{"text": "El estudiante analiza los resultados del experimento"}'
```

Response:
```json
{
  "message": "Text analyzed successfully",
  "original": "el estudiante analiza los resultados del experimento",
  "result": "el el DA0MS0 0.972\nestudiante estudiante NCMS000 1.000\n...",
  "wordGroups": {
    "el": ["el", "del"],
    "estudiante": ["estudiante"],
    "analizar": ["analiza"]
  }
}
```

### BERT Service (port 8000)

#### `GET /healthcheck`

```bash
curl http://localhost:8000/healthcheck
# {"status": "OK"}
```

#### `POST /analyze_objective/`

Classify objective text using fine-tuned BERT NER models.

```bash
curl -X POST http://localhost:8000/analyze_objective/ \
  -H 'Content-Type: application/json' \
  -d '{"text": "Analizar el impacto de la tecnología en la educación"}'
```

Response:
```json
{
  "QUE": "Analizar O\nel O\nimpacto B-QUE\nde I-QUE\nla I-QUE\ntecnología I-QUE\n...",
  "PARAQUE": "Analizar O\nel O\n...",
  "COMO": "Analizar O\nel O\n..."
}
```

## Troubleshooting

### FreeLing won't start

```bash
# Check if FreeLing is installed
which analyze
which analyzer_client

# Check if it's already running
ps aux | grep freeling

# Check the error logs
./scripts/logs.sh freeling
```

### BERT predictions fail

```bash
# Verify model directories exist
ls -la $BERT_MODELS_BASE/QUE/pretrainedmodelQUE/
ls -la $BERT_MODELS_BASE/PARAQUE/pretrainedmodelPARAQUE/
ls -la $BERT_MODELS_BASE/COMO/pretrainedmodelCOMO/

# Check Python dependencies
cd bert && source venv/bin/activate
python -c "import torch; import transformers; print('OK')"

# Check BERT logs
./scripts/logs.sh bert
```

### Service runs but requests hang

- BERT timeout is 120s in gunicorn. First request after cold start loads models into memory and can be slow.
- Check disk space: `df -h` — the temp dirs need space for per-request files.
- Check memory: `free -m` — BERT models need ~1-2GB RAM per category.

### Port already in use

```bash
# Find what's using the port
lsof -i :4000
lsof -i :8000

# Kill stale processes
./scripts/stop.sh

# If PID files are stale, clean up manually
rm -f /root/nlp-services/freeling.pid /root/nlp-services/bert.pid
```

### Services don't survive reboot

Set up the crontab entry described in the "Reboot persistence" section above.
