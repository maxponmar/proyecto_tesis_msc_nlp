from fastapi import FastAPI, HTTPException, Request
from pydantic import BaseModel
import uuid
import subprocess
import os
from starlette.middleware.cors import CORSMiddleware

app = FastAPI()

# Configuración de CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Permite cualquier origen
    allow_credentials=True,
    allow_methods=["*"],  # Permite todos los métodos HTTP
    allow_headers=["*"],  # Permite todos los encabezados
)

# Directorios de trabajo
DATA_DIR = '/root/projects/proyecto_tesis_msc_nlp/BackEnd/Bert/data'
RESULTS_DIR = '/root/projects/proyecto_tesis_msc_nlp/BackEnd/Bert/results'
BERT_DIR = '/root/projects/proyecto_tesis_msc_nlp/BackEnd/Bert'
SCRIPTS_DIR = '/root/projects/proyecto_tesis_msc_nlp/BackEnd/Bert/Scripts'

LABELS_FILE = os.path.join(DATA_DIR, 'labels.txt')
PRETRAINED_MODEL = os.path.join(BERT_DIR, 'pretrainedmodel')

class TextRequest(BaseModel):
    objetive: str

@app.post("/process_objetive/")
async def process_text(request: TextRequest):
    try:
        # Generar un identificador único
        unique_id = str(uuid.uuid4())

        # Archivos a crear y comandos a ejecutar
        input_file = os.path.join(DATA_DIR, f'objetivo-{unique_id}.txt')
        test_file = os.path.join(DATA_DIR, f'test.txt')
        results_file = os.path.join(RESULTS_DIR, 'test_predictions.txt')

        preprocess_script = os.path.join(BERT_DIR, 'preprocessobjetive.py')
        runmodel_script = os.path.join(SCRIPTS_DIR, 'run_ner.py')

        # Guardar el contenido en el archivo
        with open(input_file, 'w') as file:
            file.write(request.text)

        # Ejecutar el primer comando
        preprocess_command = [
            'python', preprocess_script, input_file, test_file
        ]
        subprocess.run(preprocess_command, check=True)

        # Ejecutar el segundo comando
        ner_command = [
            'python', runmodel_script,
            '--data_dir', DATA_DIR,
            '--labels', LABELS_FILE,
            '--model_name_or_path', PRETRAINED_MODEL,
            '--output_dir', RESULTS_DIR,
            '--max_seq_length', '128',
            '--num_train_epochs', '40',
            '--per_gpu_train_batch_size', '16',
            '--save_steps', '100',
            '--seed', '42',
            '--do_predict',
            '--overwrite_cache',
            '--overwrite_output_dir',
            '--save_total_limit', '2',
            '--learning_rate', '3e-05'
        ]
        subprocess.run(ner_command, check=True)

        # Leer el archivo de resultados
        if not os.path.exists(results_file):
            raise HTTPException(status_code=500, detail="Results file not found.")

        with open(results_file, 'r') as file:
            result_text = file.read()

        # Eliminar los archivos generados
        os.remove(input_file)
        os.remove(test_file)
        if os.path.exists(results_file):
            os.remove(results_file)

        return {"result": result_text}

    except subprocess.CalledProcessError as e:
        raise HTTPException(status_code=500, detail=f"Error executing command: {str(e)}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")

# Ejecutar la aplicación con uvicorn
# uvicorn app:app --reload
