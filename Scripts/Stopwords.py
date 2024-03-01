import nltk
import json

# Descargar stopwords en español
nltk.download('stopwords')
from nltk.corpus import stopwords

# Obtener las stopwords en español
stop_words_spanish = stopwords.words('spanish')

# Guardar las stopwords en un archivo JSON
with open('stopwords.json', 'w', encoding='utf-8') as json_file:
    json.dump(stop_words_spanish, json_file, ensure_ascii=False, indent=2)

print("Archivo 'stopwords.json' generado exitosamente.")
