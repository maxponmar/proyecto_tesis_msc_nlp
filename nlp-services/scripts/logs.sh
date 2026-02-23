#!/usr/bin/env bash
# Tail recent logs from both services.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"
LOGS_DIR="$ROOT_DIR/logs"

SERVICE="${1:-all}"
LINES="${2:-50}"

if [ ! -d "$LOGS_DIR" ]; then
  echo "No logs directory found. Have the services been started?"
  exit 1
fi

show_logs() {
  local name="$1"
  echo "===== $name error log (last $LINES lines) ====="
  if [ -f "$LOGS_DIR/$name-error.log" ]; then
    tail -n "$LINES" "$LOGS_DIR/$name-error.log"
  else
    echo "(no log file)"
  fi
  echo ""
  echo "===== $name access log (last $LINES lines) ====="
  if [ -f "$LOGS_DIR/$name-access.log" ]; then
    tail -n "$LINES" "$LOGS_DIR/$name-access.log"
  else
    echo "(no log file)"
  fi
  echo ""
}

case "$SERVICE" in
  freeling)
    show_logs "freeling"
    ;;
  bert)
    show_logs "bert"
    ;;
  all)
    show_logs "freeling"
    show_logs "bert"
    ;;
  *)
    echo "Usage: $0 [freeling|bert|all] [lines]"
    echo "  Default: all services, last 50 lines"
    exit 1
    ;;
esac
