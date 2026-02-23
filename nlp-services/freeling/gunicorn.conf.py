import os

bind = f"0.0.0.0:{os.getenv('FREELING_PORT', '4000')}"
workers = 4
timeout = 30
accesslog = "-"
errorlog = "-"
loglevel = "info"
