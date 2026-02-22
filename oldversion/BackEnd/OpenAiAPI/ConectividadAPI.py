# Esta API esta pensada para correr en VERCEL

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from openai import OpenAI
from pydantic import BaseModel
import os

OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')

app = FastAPI()

# Configura CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Reemplaza con tu dominio de GitHub Pages
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ObjetivoRequest(BaseModel):
    objetivo: str

@app.post("/analizar_objetivo/")
async def analizar_objetivo(request: ObjetivoRequest):
    try:
        client = OpenAI(api_key=OPENAI_API_KEY)

        response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {
            "role": "system",
            "content": [
                {
                "type": "text",
                "text": "El siguiente es un objetivo académico. Identifica la parte del texto que responde a la pregunta ¿Para qué?, la cual debe comenzar con un infinitivo. Solo encierra la primera sección que responde a esta pregunta en corchetes, sin modificar el resto del texto. Es importante que intentes definir la idea principal del objetivo. No encierres en corchetes más de una sección. Es importante que solo respondas 'No se pudo determinar' en caso de que no encuentres la idea en el texto. Este es un ejemplo: 'Desarrollar y evaluar una plataforma de análisis lingüístico, que combine técnicas de Procesamiento del Lenguaje Natural y tecnologías web, con el fin de asistir a estudiantes universitarios en la redacción de sus tesis, específicamente enfocada en la evaluación y mejora de la riqueza léxica en sus trabajos académicos.' el resultado debe ser como el siguiente: [Desarrollar y evaluar una plataforma de análisis lingüístico], que combine técnicas de Procesamiento del Lenguaje Natural y tecnologías web, con el fin de asistir a estudiantes universitarios en la redacción de sus tesis, específicamente enfocada en la evaluación y mejora de la riqueza léxica en sus trabajos académicos."
                }
            ]
            },
            {
            "role": "user",
            "content": [
                {
                "type": "text",
                "text": f"\"{request.objetivo}\""
                }
            ]
            }
        ],
        temperature=1,
        max_tokens=256,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0,
        response_format={
            "type": "text"
        }
        )

        client.close()

        content = response.choices[0].message.content
        return {"resultado": content}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
