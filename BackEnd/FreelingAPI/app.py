from flask import Flask, jsonify, request
from flask_cors import CORS
import subprocess
import uuid
import os


start_freeling_server_command = "analyze -f es.cfg --server --port 50005 &"
check_if_freeling_server_is_started_command = "ps aux | grep freeling"
run_freeling_command = "analyzer_client 50005 <input>output"

folders = ["QUE","PARAQUE","COMO"]

app = Flask(__name__)

CORS(
    app,
    resources={r"/api/*": {"origins": "*"}},
    methods=["GET", "POST", "DELETE", "PUT"],
    allow_headers=["Content-Type"],
)

def process_section(text, tag):
    words = text.splitlines()
    processed = []
    inside_tag = False

    for word in words:
        # Separar la palabra de la etiqueta
        parts = word.split()
        if len(parts) == 2:
            word, label = parts
        else:
            word, label = parts[0], None

        # Si la etiqueta es O, simplemente agregar la palabra
        if label == 'O':
            processed.append(word)
        # Si es la etiqueta de inicio (B-XXX), iniciar la sección
        elif label == f'B-{tag}':
            inside_tag = True
            processed.append(f'{tag}[{word}')
        # Si es la etiqueta interna (I-XXX), continuar la sección
        elif label == f'I-{tag}' and inside_tag:
            processed.append(word)
        # Cerrar la sección si termina
        elif label != f'I-{tag}' and inside_tag:
            processed.append(']')
            inside_tag = False

    # Cerrar cualquier sección abierta al final
    if inside_tag:
        processed.append(']')

    return ' '.join(processed)

def run_bash_command(command):
    try:
        output = subprocess.check_output(command, shell=True, stderr=subprocess.STDOUT)
        return output.decode("utf-8")
    except subprocess.CalledProcessError as e:
        return "An error occurred: " + e.output.decode("utf-8")


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


def analyze_file_with_freeling(file, id):
    temporal_directory = "temp"

    # Check if the temporal directory exists, creat it if not
    if not os.path.exists(temporal_directory):
        os.makedirs(temporal_directory)

    analyze_command = run_freeling_command.replace("input", file)
    analyze_command = analyze_command.replace(
        "output", f"{temporal_directory}/{id}.mrf"
    )

    run_bash_command(analyze_command)

    with open(f"{temporal_directory}/{id}.mrf", "r") as file:
        return file.read()


@app.route("/api/startfreeling", methods=["GET"])
def start_freeling():
    try:
        is_freeling_already_started = check_freeling_status()
        if is_freeling_already_started:
            return jsonify({"status": "Already Started"})
        run_background_command(start_freeling_server_command)
        return jsonify({"status": "Successfully Started"})
    except Exception as e:
        return jsonify({"status": "Error ocurred: " + str(e)})


@app.route("/api/healthcheck")
def health_check():
    is_freeling_ok = check_freeling_status()
    return jsonify({"status": "OK"}) if is_freeling_ok else jsonify({"status": "BAD"})


@app.route("/api/freeling", methods=["POST"])
def create_file():
    if not request.is_json:
        return jsonify({"message": "Request must be JSON"}), 400

    data = request.get_json()
    text = data.get("text").lower()

    if not text:
        return jsonify({"message": "No text provided"}), 400

    temporal_directory = "temp"

    # Check if the temporal directory exists, creat it if not
    if not os.path.exists(temporal_directory):
        os.makedirs(temporal_directory)

    # Generate a unique file name
    file_id = uuid.uuid4()
    filename = os.path.join(temporal_directory, f"{file_id}.txt")

    # Write the text to the file
    with open(filename, "w") as file:
        file.write(text)

    # Analyze the file with freeling
    analyzed_text = analyze_file_with_freeling(filename, file_id)

    # Delete the file
    freelingFilename = os.path.join(temporal_directory, f"{file_id}.mrf")
    os.remove(filename)
    os.remove(freelingFilename)

    # lines = analyzed_text.split('\n')
    # # Split each line by empty space and get the first and second elements
    # word_info = []
    # for line in lines:
    #     elements = line.split()
    #     if len(elements) >= 2:
    #         raw_word = elements[0]
    #         base_word = elements[1]
    #         word_info.append({"rawWord": raw_word, "baseWord": base_word})
    # print(word_info)

    # Split the text by line break (\n) to get lines
    lines = analyzed_text.split("\n")

    # Create a dictionary to store raw words grouped by base words
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

    # Print the grouped words
    # for base_word, raw_words in word_groups.items():
    #     print(f"Base Word: {base_word}")
    #     print(f"Raw Words: {', '.join(raw_words)}\n")

    return jsonify(
        {
            "message": "Text analyzed successfully",
            "original": text,
            "result": analyzed_text,
            "wordGroups": word_groups,
        }
    )

@app.route('/analyze_objective/', methods=['POST'])
def process_text():
    results = {}

    for folder in folders:
        # Directorios de trabajo
        DATA_DIR = f'/root/projects/proyecto_tesis_msc_nlp/BackEnd/Bert/{folder}/data/'
        RESULTS_DIR = f'/root/projects/proyecto_tesis_msc_nlp/BackEnd/Bert/{folder}/results/'
        MODEL_DIR = f'/root/projects/proyecto_tesis_msc_nlp/BackEnd/Bert/{folder}/pretrainedmodel{folder}/'

        # Generar un identificador único
        unique_id = str(uuid.uuid4())

        # Archivos a crear y comandos a ejecutar
        input_file = os.path.join(DATA_DIR, f'objetivo-{unique_id}.txt')
        test_file = os.path.join(DATA_DIR, f'test.txt')
        results_file = os.path.join(RESULTS_DIR, 'test_predictions.txt')

        try:
            # Obtener datos de la solicitud
            data = request.get_json()
            if 'text' not in data:
                return jsonify({"message": "Missing 'text' in request body"}), 400
            text = data['text']


            # Guardar el contenido en el archivo
            with open(input_file, 'w') as file:
                file.write(text)

            # Ejecutar el primer comando
            command = "python3 /root/projects/proyecto_tesis_msc_nlp/BackEnd/Bert/preprocessobjetive.py " + input_file + " " + test_file
            result = run_bash_command(command)

            #print("1 >>>>>> " +command)
            #print("1 >>>>>> " +result)


            command = f"python3 /root/projects/proyecto_tesis_msc_nlp/BackEnd/Bert/Scripts/run_ner.py --data_dir {DATA_DIR} \
        --labels {DATA_DIR}/labels.txt \
        --model_name_or_path {MODEL_DIR} \
        --output_dir {RESULTS_DIR} \
        --max_seq_length  128 \
        --num_train_epochs 40 \
        --per_gpu_train_batch_size 16 \
        --save_steps 100 \
        --seed 42 \
        --do_predict \
        --overwrite_cache \
        --overwrite_output_dir \
        --save_total_limit 2 \
        --learning_rate 3e-05"

            # Ejecutar el segundo comando
            result = run_bash_command(command)

            #print("2 >>>>>> " + command)
            #print("2 >>>>>> " + result)


            # Leer el archivo de resultados
            if not os.path.exists(results_file):
                return jsonify({"message": "Results file not found."}), 500

            with open(results_file, 'r') as file:
                results[folder] = file.read()

            # Eliminar los archivos generados
            os.remove(input_file)
            os.remove(test_file)
            if os.path.exists(results_file):
                os.remove(results_file)

        except subprocess.CalledProcessError as e:
            return jsonify({"message": f"Error executing command: {str(e)}"}), 500
        except Exception as e:
            return jsonify({"message": f"An error occurred: {str(e)}"}), 500
        finally:
            # Eliminar los archivos generados
            if os.path.exists(input_file):
                os.remove(input_file)
            if os.path.exists(test_file):
                os.remove(test_file)
            if os.path.exists(results_file):
                os.remove(results_file)

    # Procesar cada parte del diccionario

    return jsonify(results)



if __name__ == "__main__":
    #app.run(debug=False, host="0.0.0.0", port=4000, ssl_context=('/etc/letsencrypt/live/nlp.maximilianoponce.com/fullchain.pem', '/etc/letsencrypt/live/nlp.maximilianoponce.com/privkey.pem'))
    app.run(debug=False, host="0.0.0.0", port=4000)
