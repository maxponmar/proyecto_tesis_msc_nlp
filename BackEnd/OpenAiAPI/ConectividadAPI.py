from openai import OpenAI
client = OpenAI(api_key='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')

objetivo = "En el presente trabajo se pretende implementar un sistema de gestión educativo para escuelas secundarias."

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
          "text": f"\"{objetivo}\""
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

content = response.choices[0].message.content
print(content)