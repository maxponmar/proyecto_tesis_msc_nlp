from flask import Flask, jsonify, request
import subprocess
import uuid
import os

start_freeling_server_command = 'analyze -f es.cfg --server --port 50005 &'
check_if_freeling_server_is_started_command = 'ps aux | grep freeling'
run_freeling_command = 'analyzer_client 50005 '

app = Flask(__name__)

def run_bash_command(command):
    try:
        output = subprocess.check_output(command, shell=True, stderr=subprocess.STDOUT)
        return output.decode('utf-8')
    except subprocess.CalledProcessError as e:
        return "An error occurred: " + e.output.decode('utf-8')

def run_background_command(command):
    try:
        # Running the command without capturing output
        subprocess.Popen(command, shell=True)
        return "Command executed successfully"
    except Exception as e:
        return "An error occurred: " + str(e)

def check_freeling_status():
    result = run_bash_command(check_if_freeling_server_is_started_command)
    if "freeling/config/es.cfg" in result:
        return True
    else:
        return False

@app.route('/startfreeling', methods=['GET'])
def start_freeling():
    try:
        is_freeling_already_started = check_freeling_status()
        if(is_freeling_already_started):
            return jsonify({"status": "Already Started"})
        run_background_command(start_freeling_server_command)
        return jsonify({"status": "Successfully Started"})
    except Exception as e:
        return jsonify({"status": "Error ocurred: " + str(e)})


@app.route('/healthcheck')
def health_check():
    is_freeling_ok = check_freeling_status()
    return jsonify({"status": "OK"}) if is_freeling_ok else jsonify({"status": "BAD"})

@app.route('/freeling', methods=['POST'])
def analyze_file_with_freeling():
    uploaded_file = request.files['file']
    if uploaded_file.filename != '':
        file_contents = uploaded_file.read()
        # Process the file_contents as needed
        print(file_contents)

        return file_contents
    return 'No file uploaded.'

@app.route('/create-file', methods=['POST'])
def create_file():
    if not request.is_json:
        return jsonify({"message": "Request must be JSON"}), 400

    data = request.get_json()
    text = data.get('text')

    if not text:
        return jsonify({"message": "No text provided"}), 400

    temporal_directory = "temp"

    # Check if the temporal directory exists, creat it if not
    if not os.path.exists(temporal_directory):
        os.makedirs(temporal_directory)

    # Generate a unique file name
    filename = os.path.join(temporal_directory, f"{uuid.uuid4()}.txt")

    # Write the text to the file
    with open(filename, 'w') as file:
        file.write(text)

    return jsonify({"message": "File created successfully", "filename": filename})


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=4000)
