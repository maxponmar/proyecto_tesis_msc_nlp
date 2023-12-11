from flask import Flask, jsonify, request
import subprocess

print("Starting Freeling Server...")

start_freeling_server_command = 'analyze -f es.cfg --server --port 50005 &'
check_if_freeling_server_is_started_command = 'ps aux | grep freeling'
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
    result = run_bash_command(check_if_freeling_server_is_started_command)
    print("\n==========")
    print(result)
    if "freeling/config/es.cfg" in result:
        return jsonify({"status": "OK"})
    else:
        return jsonify({"status": "BAD"})
    

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
