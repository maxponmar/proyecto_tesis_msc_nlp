"""FreeLing NLP analysis service."""

import os
import uuid
import subprocess

from flask import Flask, jsonify, request
from flask_cors import CORS

import config

app = Flask(__name__)

CORS(
    app,
    resources={r"/api/*": {"origins": "*"}},
    methods=["GET", "POST", "DELETE", "PUT"],
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


def run_background_command(command: str) -> str:
    try:
        subprocess.Popen(command, shell=True)
        return "Command executed successfully"
    except Exception as e:
        return "An error occurred: " + str(e)


def check_freeling_status() -> bool:
    result = run_bash_command(config.CHECK_SERVER_CMD)
    return "freeling" in result and "cfg" in result


def analyze_file_with_freeling(filepath: str, file_id: str) -> str:
    os.makedirs(config.TEMP_DIR, exist_ok=True)

    output_path = os.path.join(config.TEMP_DIR, f"{file_id}.mrf")
    cmd = f"analyzer_client {config.SERVER_PORT} <{filepath}>{output_path}"
    run_bash_command(cmd)

    with open(output_path, "r") as f:
        return f.read()


# ---------------------------------------------------------------------------
# Routes
# ---------------------------------------------------------------------------

@app.route("/api/startfreeling", methods=["GET"])
def start_freeling():
    try:
        if check_freeling_status():
            return jsonify({"status": "Already Started"})
        run_background_command(config.START_SERVER_CMD)
        return jsonify({"status": "Successfully Started"})
    except Exception as e:
        return jsonify({"status": "Error ocurred: " + str(e)})


@app.route("/api/healthcheck")
def health_check():
    is_ok = check_freeling_status()
    return jsonify({"status": "OK"}) if is_ok else jsonify({"status": "BAD"})


@app.route("/api/freeling", methods=["POST"])
def analyze_text():
    if not request.is_json:
        return jsonify({"message": "Request must be JSON"}), 400

    data = request.get_json()
    text = data.get("text", "").lower()

    if not text:
        return jsonify({"message": "No text provided"}), 400

    os.makedirs(config.TEMP_DIR, exist_ok=True)

    file_id = uuid.uuid4()
    input_path = os.path.join(config.TEMP_DIR, f"{file_id}.txt")
    output_path = os.path.join(config.TEMP_DIR, f"{file_id}.mrf")

    try:
        with open(input_path, "w") as f:
            f.write(text)

        analyzed_text = analyze_file_with_freeling(input_path, str(file_id))

        # Group raw words by their base (lemma) form
        lines = analyzed_text.split("\n")
        word_groups = {}
        for line in lines:
            elements = line.split()
            if len(elements) >= 2:
                raw_word = elements[0]
                base_word = elements[1]
                if base_word in word_groups:
                    word_groups[base_word].append(raw_word)
                else:
                    word_groups[base_word] = [raw_word]

        return jsonify({
            "message": "Text analyzed successfully",
            "original": text,
            "result": analyzed_text,
            "wordGroups": word_groups,
        })
    finally:
        # Clean up temp files
        for path in (input_path, output_path):
            if os.path.exists(path):
                os.remove(path)


if __name__ == "__main__":
    app.run(debug=False, host=config.HOST, port=config.PORT)
