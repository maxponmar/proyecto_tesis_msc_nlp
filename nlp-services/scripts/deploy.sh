#!/usr/bin/env bash
# Deploy: pull latest code, update deps, restart services.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"

echo "=== NLP Services Deploy ==="

# Pull latest code
echo "Pulling latest changes..."
cd "$ROOT_DIR"
git pull --ff-only

# Update dependencies
echo ""
echo "Updating FreeLing dependencies..."
cd "$ROOT_DIR/freeling"
source venv/bin/activate
pip install -r requirements.txt -q
deactivate

echo "Updating BERT dependencies..."
cd "$ROOT_DIR/bert"
source venv/bin/activate
pip install -r requirements.txt -q
deactivate

# Restart services
echo ""
echo "Restarting services..."
"$SCRIPT_DIR/stop.sh"
"$SCRIPT_DIR/start.sh"

echo ""
echo "=== Deploy complete ==="
