from flask import Flask, request, jsonify, abort
import uuid
import subprocess
import os

app = Flask(__name__)

folders = ["QUE","PARAQUE","COMO"]


def run_bash_command(command):
    try:
        output = subprocess.check_output(command, shell=True, stderr=subprocess.STDOUT)
        return output.decode("utf-8")
    except subprocess.CalledProcessError as e:
        return "An error occurred: " + e.output.decode("utf-8")


@app.route('/objective/', methods=['POST'])
def process_text():
    for folder in folders:

        # Directorios de trabajo
        DATA_DIR = '/root/projects/proyecto_tesis_msc_nlp/BackEnd/Bert/QUE/data'
        RESULTS_DIR = '/root/projects/proyecto_tesis_msc_nlp/BackEnd/Bert/results'

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
            abort(400, description="Missing 'text' in request body")
        text = data['text']

                
        # Guardar el contenido en el archivo
        with open(input_file, 'w') as file:
            file.write(text)
        
        # Ejecutar el primer comando
        command = "python3 /root/projects/proyecto_tesis_msc_nlp/BackEnd/Bert/preprocessobjetive.py " + input_file + " " + test_file
        result = run_bash_command(command)

        print("1 >>>>>> " +command)
        print("1 >>>>>> " +result)

       
        command = "python3 /root/projects/proyecto_tesis_msc_nlp/BackEnd/Bert/Scripts/run_ner.py --data_dir /root/projects/proyecto_tesis_msc_nlp/BackEnd/Bert/data \
    --labels /root/projects/proyecto_tesis_msc_nlp/BackEnd/Bert/data/labels.txt \
    --model_name_or_path /root/projects/proyecto_tesis_msc_nlp/BackEnd/Bert/pretrainedmodel \
    --output_dir /root/projects/proyecto_tesis_msc_nlp/BackEnd/Bert/results \
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

        print("2 >>>>>> " +command)
        print("2 >>>>>> " +result)
        
    
        # Leer el archivo de resultados
        if not os.path.exists(results_file):
            abort(500, description="Results file not found.")
        
        with open(results_file, 'r') as file:
            result_text = file.read()
        
        # Eliminar los archivos generados
        os.remove(input_file)
        os.remove(test_file)
        if os.path.exists(results_file):
            os.remove(results_file)
        
        return jsonify({"result": result_text})
    
    except subprocess.CalledProcessError as e:
        abort(500, description=f"Error executing command: {str(e)}")
    except Exception as e:
        abort(500, description=f"An error occurred: {str(e)}")
    finally:
        # Eliminar los archivos generados
        if os.path.exists(input_file):
            os.remove(input_file)
        if os.path.exists(test_file):
            os.remove(test_file)
        if os.path.exists(results_file):
            os.remove(results_file)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8000, debug=True)

