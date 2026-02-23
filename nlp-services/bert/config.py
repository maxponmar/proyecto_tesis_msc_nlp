import os

HOST = os.getenv("BERT_HOST", "0.0.0.0")
PORT = int(os.getenv("BERT_PORT", "8000"))

# Base directory containing QUE/, PARAQUE/, COMO/ model folders
MODELS_BASE = os.getenv("BERT_MODELS_BASE", "/root/nlp-services/models")

# Temp directory for per-request working files
TEMP_DIR = os.getenv("BERT_TEMP_DIR", "/tmp/bert-workdir")

# Labels directory (BIO label files committed in repo)
LABELS_DIR = os.getenv(
    "BERT_LABELS_DIR",
    os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "labels"),
)

# NER scripts directory
NER_SCRIPTS_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "ner")

# Classification folders
FOLDERS = ["QUE", "PARAQUE", "COMO"]

# NER inference parameters
NER_MAX_SEQ_LENGTH = 128
NER_NUM_TRAIN_EPOCHS = 40
NER_BATCH_SIZE = 16
NER_SAVE_STEPS = 100
NER_SEED = 42
NER_LEARNING_RATE = "3e-05"
NER_SAVE_TOTAL_LIMIT = 2


def data_dir(folder: str) -> str:
    return os.path.join(MODELS_BASE, folder, "data")


def results_dir(folder: str) -> str:
    return os.path.join(MODELS_BASE, folder, "results")


def model_dir(folder: str) -> str:
    return os.path.join(MODELS_BASE, folder, f"pretrainedmodel{folder}")


def labels_file(folder: str) -> str:
    return os.path.join(LABELS_DIR, f"{folder}.txt")
