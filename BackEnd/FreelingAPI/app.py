from flask import Flask, jsonify, request
import subprocess

print("Starting Freeling Server...")

start_freeling_server_command = 'analyze -f es.cfg --server --port 50005 &'
check_if_freeling_server_is_started = 'ps -ef | grep "freeling/config/es.cfg- --server --port 50005"'
run_freeling = 'analyzer_client 50005 '

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

@app.route('/startfreeling', methods=['GET'])
def start_freeling():
    result = run_background_command(start_freeling_server_command)
    return result

@app.route('/healthcheck')
def health_check():
    output = subprocess.check_output(check_if_freeling_server_is_started.split())
    text = output.decode('utf-8')
    print(text)
    freeling_started = "Ok" if "\n" in text else "Bad"
    return jsonify({"status": freeling_started})

@app.route('/freeling', methods=['POST'])
def analyze_file_with_freeling():
    uploaded_file = request.files['file']
    if uploaded_file.filename != '':
        file_contents = uploaded_file.read()
        # Process the file_contents as needed
        print(file_contents)

        return file_contents
    return 'No file uploaded.'

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=4000)