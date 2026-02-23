#!/usr/bin/env bash
# Check running state of both services.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"

# Load .env if present
if [ -f "$ROOT_DIR/.env" ]; then
  set -a; source "$ROOT_DIR/.env"; set +a
fi

FREELING_PORT="${FREELING_PORT:-4000}"
BERT_PORT="${BERT_PORT:-8000}"

echo "=== NLP Services Status ==="

check_service() {
  local name="$1"
  local pidfile="$ROOT_DIR/$name.pid"
  local port="$2"

  printf "%-12s" "$name:"

  if [ -f "$pidfile" ]; then
    PID=$(cat "$pidfile")
    if kill -0 "$PID" 2>/dev/null; then
      echo "RUNNING (PID $PID, port $port)"
    else
      echo "DEAD (stale PID file)"
    fi
  else
    echo "STOPPED (no PID file)"
  fi
}

check_service "freeling" "$FREELING_PORT"
check_service "bert" "$BERT_PORT"

echo ""
echo "--- Quick health checks ---"

# FreeLing health
if curl -sf "http://localhost:$FREELING_PORT/api/healthcheck" -o /dev/null 2>/dev/null; then
  echo "FreeLing healthcheck: OK"
else
  echo "FreeLing healthcheck: UNREACHABLE"
fi

# BERT health
if curl -sf "http://localhost:$BERT_PORT/healthcheck" -o /dev/null 2>/dev/null; then
  echo "BERT healthcheck:     OK"
else
  echo "BERT healthcheck:     UNREACHABLE"
fi
