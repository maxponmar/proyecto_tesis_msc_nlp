#!/usr/bin/env bash
# Graceful shutdown via PID files.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"

echo "=== Stopping NLP Services ==="

stop_service() {
  local name="$1"
  local pidfile="$ROOT_DIR/$name.pid"

  if [ -f "$pidfile" ]; then
    PID=$(cat "$pidfile")
    if kill -0 "$PID" 2>/dev/null; then
      echo "Stopping $name (PID $PID)..."
      kill -TERM "$PID"
      # Wait up to 10 seconds for graceful shutdown
      for i in $(seq 1 10); do
        if ! kill -0 "$PID" 2>/dev/null; then
          break
        fi
        sleep 1
      done
      if kill -0 "$PID" 2>/dev/null; then
        echo "  Force-killing $name..."
        kill -9 "$PID" 2>/dev/null || true
      fi
      echo "  $name stopped."
    else
      echo "$name not running (stale PID file)."
    fi
    rm -f "$pidfile"
  else
    echo "$name: no PID file found."
  fi
}

stop_service "freeling"
stop_service "bert"

echo ""
echo "=== All services stopped ==="
