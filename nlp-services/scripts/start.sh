#!/usr/bin/env bash
# Start both gunicorn daemons.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"

# Load .env if present
if [ -f "$ROOT_DIR/.env" ]; then
  set -a; source "$ROOT_DIR/.env"; set +a
fi

LOGS_DIR="$ROOT_DIR/logs"
mkdir -p "$LOGS_DIR"

echo "=== Starting NLP Services ==="

# --- FreeLing ---
echo "Starting FreeLing service..."
cd "$ROOT_DIR/freeling"
source venv/bin/activate
gunicorn app:app \
  -c gunicorn.conf.py \
  --daemon \
  --pid "$ROOT_DIR/freeling.pid" \
  --access-logfile "$LOGS_DIR/freeling-access.log" \
  --error-logfile "$LOGS_DIR/freeling-error.log"
deactivate
echo "  FreeLing started (PID file: freeling.pid)"

# --- BERT ---
echo "Starting BERT service..."
cd "$ROOT_DIR/bert"
source venv/bin/activate
gunicorn app:app \
  -c gunicorn.conf.py \
  --daemon \
  --pid "$ROOT_DIR/bert.pid" \
  --access-logfile "$LOGS_DIR/bert-access.log" \
  --error-logfile "$LOGS_DIR/bert-error.log"
deactivate
echo "  BERT started (PID file: bert.pid)"

echo ""
echo "=== Both services started ==="
echo "Run '$SCRIPT_DIR/status.sh' to verify."
