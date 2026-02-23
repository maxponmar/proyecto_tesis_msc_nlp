#!/usr/bin/env bash
# First-time setup: create venvs, install deps, validate models exist.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"

# Load .env if present
if [ -f "$ROOT_DIR/.env" ]; then
  set -a; source "$ROOT_DIR/.env"; set +a
fi

BERT_MODELS_BASE="${BERT_MODELS_BASE:-/root/nlp-services/models}"

echo "=== NLP Services Setup ==="

# --- FreeLing venv ---
echo ""
echo "--- Setting up FreeLing service ---"
cd "$ROOT_DIR/freeling"
if [ ! -d venv ]; then
  python3 -m venv venv
  echo "Created freeling/venv"
fi
source venv/bin/activate
pip install --upgrade pip -q
pip install -r requirements.txt -q
deactivate
echo "FreeLing dependencies installed."

# --- BERT venv ---
echo ""
echo "--- Setting up BERT service ---"
cd "$ROOT_DIR/bert"
if [ ! -d venv ]; then
  python3 -m venv venv
  echo "Created bert/venv"
fi
source venv/bin/activate
pip install --upgrade pip -q
pip install -r requirements.txt -q
deactivate
echo "BERT dependencies installed."

# --- Validate model directories ---
echo ""
echo "--- Validating model directories ---"
MISSING=0
for FOLDER in QUE PARAQUE COMO; do
  MODEL_PATH="$BERT_MODELS_BASE/$FOLDER/pretrainedmodel$FOLDER"
  if [ -d "$MODEL_PATH" ]; then
    echo "  [OK] $MODEL_PATH"
  else
    echo "  [MISSING] $MODEL_PATH"
    MISSING=1
  fi
done

if [ "$MISSING" -eq 1 ]; then
  echo ""
  echo "WARNING: Some model directories are missing."
  echo "Copy your pretrained models to BERT_MODELS_BASE=$BERT_MODELS_BASE"
fi

# --- Create .env from example if missing ---
if [ ! -f "$ROOT_DIR/.env" ]; then
  cp "$ROOT_DIR/.env.example" "$ROOT_DIR/.env"
  echo ""
  echo "Created .env from .env.example — edit it for your environment."
fi

echo ""
echo "=== Setup complete ==="
