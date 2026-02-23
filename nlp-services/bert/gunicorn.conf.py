import os

bind = f"0.0.0.0:{os.getenv('BERT_PORT', '8000')}"
workers = 1  # BERT models are memory-heavy; single worker avoids OOM
timeout = 120  # NER inference can be slow
accesslog = "-"
errorlog = "-"
loglevel = "info"
