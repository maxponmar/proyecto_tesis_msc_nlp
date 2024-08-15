import re

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

# Define el objetivo
objetivo = (
    "Implementar un sistema de gestión de inventarios en la nube que permita a las pequeñas y medianas empresas "
    "controlar y monitorear en tiempo real su inventario, optimizando los procesos de abastecimiento y reduciendo "
    "costos operativos."
)

# Define la ruta y nombre del archivo de salida
ruta_archivo = "test.txt"  # Puedes cambiar esto a cualquier ruta o nombre que desees

# Llama a la función con el objetivo y la ruta del archivo
procesar_objetivo(objetivo, ruta_archivo)

