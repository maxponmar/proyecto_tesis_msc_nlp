"""BERT objective classification service."""

import os
import shutil
import subprocess
import sys
import uuid

from flask import Flask, jsonify, request
from flask_cors import CORS

import config
from preprocessing import write_conll_file

app = Flask(__name__)

CORS(
    app,
    resources={r"/*": {"origins": "*"}},
    methods=["GET", "POST"],
    allow_headers=["Content-Type"],
)


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def run_bash_command(command: str) -> str:
    try:
        output = subprocess.check_output(command, shell=True, stderr=subprocess.STDOUT)
        return output.decode("utf-8")
    except subprocess.CalledProcessError as e:
        return "An error occurred: " + e.output.decode("utf-8")


def process_section(text: str, tag: str) -> str:
    """Parse NER prediction output and wrap tagged spans in TAG[...] notation."""
    words = text.splitlines()
    processed = []
    inside_tag = False

    for word in words:
        parts = word.split()
        if len(parts) == 2:
            word, label = parts
        elif len(parts) >= 1:
            word, label = parts[0], None
        else:
            continue

        if label == "O":
            processed.append(word)
        elif label == f"B-{tag}":
            inside_tag = True
            processed.append(f"{tag}[{word}")
        elif label == f"I-{tag}" and inside_tag:
            processed.append(word)
        elif label != f"I-{tag}" and inside_tag:
            processed.append("]")
            inside_tag = False

    if inside_tag:
        processed.append("]")

    return " ".join(processed)


# ---------------------------------------------------------------------------
# Routes
# ---------------------------------------------------------------------------

@app.route("/healthcheck")
def health_check():
    return jsonify({"status": "OK"})


@app.route("/analyze_objective/", methods=["POST"])
def analyze_objective():
    data = request.get_json()
    if not data or "text" not in data:
        return jsonify({"message": "Missing 'text' in request body"}), 400

    text = data["text"]
    results = {}

    # Create a unique working directory for this request to avoid collisions
    request_id = str(uuid.uuid4())
    work_dir = os.path.join(config.TEMP_DIR, request_id)

    try:
        for folder in config.FOLDERS:
            folder_work = os.path.join(work_dir, folder)
            data_dir = os.path.join(folder_work, "data")
            results_dir_path = os.path.join(folder_work, "results")
            os.makedirs(data_dir, exist_ok=True)
            os.makedirs(results_dir_path, exist_ok=True)

            # Write CoNLL-formatted test file
            test_file = os.path.join(data_dir, "test.txt")
            write_conll_file(text, test_file)

            # Copy labels file into data dir (run_ner expects it there)
            labels_src = config.labels_file(folder)
            labels_dst = os.path.join(data_dir, "labels.txt")
            shutil.copy2(labels_src, labels_dst)

            # Run NER prediction via subprocess (proven approach)
            ner_script = os.path.join(config.NER_SCRIPTS_DIR, "run_ner.py")
            model_path = config.model_dir(folder)

            command = (
                f"{sys.executable} -m ner.run_ner"
                f" --data_dir {data_dir}"
                f" --labels {labels_dst}"
                f" --model_name_or_path {model_path}"
                f" --output_dir {results_dir_path}"
                f" --max_seq_length {config.NER_MAX_SEQ_LENGTH}"
                f" --num_train_epochs {config.NER_NUM_TRAIN_EPOCHS}"
                f" --per_gpu_train_batch_size {config.NER_BATCH_SIZE}"
                f" --save_steps {config.NER_SAVE_STEPS}"
                f" --seed {config.NER_SEED}"
                f" --do_predict"
                f" --overwrite_cache"
                f" --overwrite_output_dir"
                f" --save_total_limit {config.NER_SAVE_TOTAL_LIMIT}"
                f" --learning_rate {config.NER_LEARNING_RATE}"
            )

            result = run_bash_command(command)

            # Read predictions
            predictions_file = os.path.join(results_dir_path, "test_predictions.txt")
            if not os.path.exists(predictions_file):
                return jsonify({"message": f"Results file not found for {folder}."}), 500

            with open(predictions_file, "r") as f:
                results[folder] = f.read()

    except subprocess.CalledProcessError as e:
        return jsonify({"message": f"Error executing command: {str(e)}"}), 500
    except Exception as e:
        return jsonify({"message": f"An error occurred: {str(e)}"}), 500
    finally:
        # Clean up the entire working directory for this request
        if os.path.exists(work_dir):
            shutil.rmtree(work_dir, ignore_errors=True)

    return jsonify(results)


if __name__ == "__main__":
    app.run(debug=False, host=config.HOST, port=config.PORT)
