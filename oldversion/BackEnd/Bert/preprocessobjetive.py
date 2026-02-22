import re
import sys

def procesar_objetivo(objetivo, ruta_archivo):
    """
    Procesa el objetivo y lo guarda en un archivo donde cada palabra o signo de puntuación ocupa una línea,
    seguida de 'O'.

    :param objetivo: El texto del objetivo a procesar.
    :param ruta_archivo: La ruta y nombre del archivo de salida.
    """
    # Expresión regular para separar palabras y signos de puntuación
    tokens = re.findall(r'\b\w+\b|[.,\'"]', objetivo)
    
    # Abre el archivo en modo de escritura
    with open(ruta_archivo, "w") as archivo:
        # Recorre cada token del objetivo
        for token in tokens:
            archivo.write(f"{token} O\n")  # Escribe el token seguido de " O" y un salto de línea

def main():
    if len(sys.argv) != 3:
        print("Uso: python script.py <ruta_archivo_objetivo> <ruta_archivo_salida>")
        sys.exit(1)

    ruta_archivo_objetivo = sys.argv[1]
    ruta_archivo_salida = sys.argv[2]

    # Lee el contenido del archivo de objetivo
    try:
        with open(ruta_archivo_objetivo, "r") as archivo_objetivo:
            objetivo = archivo_objetivo.read()
    except FileNotFoundError:
        print(f"El archivo de objetivo '{ruta_archivo_objetivo}' no se encontró.")
        sys.exit(1)

    # Llama a la función con el objetivo y la ruta del archivo de salida
    procesar_objetivo(objetivo, ruta_archivo_salida)

if __name__ == "__main__":
    main()

