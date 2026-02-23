import os

HOST = os.getenv("FREELING_HOST", "0.0.0.0")
PORT = int(os.getenv("FREELING_PORT", "4000"))

# FreeLing analyzer server port (internal)
SERVER_PORT = os.getenv("FREELING_SERVER_PORT", "50005")
CONFIG = os.getenv("FREELING_CONFIG", "es.cfg")

# Temp directory for per-request files
TEMP_DIR = os.getenv("FREELING_TEMP_DIR", "temp")

# Derived commands
START_SERVER_CMD = f"analyze -f {CONFIG} --server --port {SERVER_PORT} &"
CHECK_SERVER_CMD = "ps aux | grep freeling"
ANALYZE_CMD_TEMPLATE = f"analyzer_client {SERVER_PORT} <{{input}}>{{output}}"
