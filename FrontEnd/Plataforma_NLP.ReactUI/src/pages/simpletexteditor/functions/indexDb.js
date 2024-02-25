import commonWordsFromFile from "../../../assets/lexical/commonwords.json";
import stopWordsFromFile from "../../../assets/lexical/stopwords.json";

const palabrasComunes = new Set(commonWordsFromFile);
const stopwords = new Set(stopWordsFromFile);

export function saveWordGruopsToDB(wordGroups) {
  // Abre o crea la base de datos IndexDB
  const request = indexedDB.open("miBaseDeDatos", 1);

  request.onerror = function (event) {
    console.error("Error al abrir la base de datos:", event.target.errorCode);
  };

  request.onupgradeneeded = function (event) {
    const db = event.target.result;

    // Crea un almacén de objetos (object store) llamado 'wordGroups'
    const objectStore = db.createObjectStore("wordGroups", { keyPath: "base" });

    // Define el índice 'baseIndex' para buscar por la palabra base
    objectStore.createIndex("baseIndex", "base", { unique: true });
  };

  request.onsuccess = function (event) {
    const db = event.target.result;

    // Abre una transacción de lectura/escritura en el almacén 'wordGroups'
    const transaction = db.transaction(["wordGroups"], "readwrite");

    // Obtiene el almacén de objetos
    const objectStore = transaction.objectStore("wordGroups");

    for (const baseWord in wordGroups) {
      const request = objectStore.get(baseWord);

      request.onsuccess = function (event) {
        const existingData = event.target.result;

        if (existingData) {
          // Si la palabra base existe, agrega las palabras secundarias nuevas y únicas
          const existingWords = existingData.words;
          const newWords = wordGroups[baseWord];

          // Filtra las nuevas palabras secundarias para eliminar duplicados
          const uniqueWords = [...new Set([...existingWords, ...newWords])];

          // Actualiza los datos existentes en la base de datos
          const updateRequest = objectStore.put({
            base: baseWord,
            words: uniqueWords,
          });

          updateRequest.onerror = function (event) {
            console.error("Error al actualizar los datos:", event.target.error);
          };
        } else {
          // Si no existe un objeto con esta clave, agrega los datos tal como están
          const wordGroup = wordGroups[baseWord];
          objectStore.add({ base: baseWord, words: wordGroup });
        }
      };
    }
  };
}

export async function eliminarPalabrasSecundarias(texto) {
  try {
    // Abre una conexión a la base de datos o la crea si no existe
    const db = await new Promise((resolve, reject) => {
      const request = indexedDB.open("miBaseDeDatos", 1);

      request.onerror = function (event) {
        console.error(
          "Error al abrir la base de datos:",
          event.target.errorCode
        );
        reject(event.target.error);
      };

      request.onupgradeneeded = function (event) {
        const db = event.target.result;

        // Define la estructura de la base de datos si está creándose por primera vez
        const wordGroupsStore = db.createObjectStore("wordGroups", {
          keyPath: "base",
        });
        // Puedes agregar índices o propiedades adicionales si es necesario
      };

      request.onsuccess = function (event) {
        resolve(event.target.result);
      };
    });

    // Abre una transacción de lectura en el almacén 'wordGroups'
    const transaction = db.transaction(["wordGroups"], "readonly");

    // Obtiene el almacén de objetos
    const objectStore = transaction.objectStore("wordGroups");

    // Obtiene todas las palabras secundarias de la base de datos
    const palabrasSecundarias = await new Promise((resolve, reject) => {
      const request = objectStore.getAll();

      request.onsuccess = function (event) {
        resolve(
          event.target.result.reduce((result, data) => {
            return result.concat(data.words);
          }, [])
        );
      };

      request.onerror = function (event) {
        console.error(
          "Error al acceder a la base de datos:",
          event.target.error
        );
        reject(event.target.error);
      };
    });

    // Divide el texto de entrada en palabras
    const palabrasTexto = texto.split(" ");

    // Filtra las palabras del texto que no están en la lista de palabras secundarias
    const palabrasFiltradas = palabrasTexto.filter(
      (palabra) => !palabrasSecundarias.includes(palabra)
    );

    // Construye el texto resultante
    const textoResultado = palabrasFiltradas.join(" ");

    // Cierra la transacción y la conexión a la base de datos
    transaction.oncomplete = function () {
      db.close();
      if (textoResultado.length > 0)
        console.log("Texto sin palabras repetidas en db:", textoResultado);
    };

    return textoResultado;
  } catch (error) {
    console.error("Ocurrió un error:", error);
    throw error;
  }
}

export async function construirDiccionario(texto) {
  try {
    const db = await new Promise((resolve, reject) => {
      const request = indexedDB.open("miBaseDeDatos", 1);

      request.onerror = function (event) {
        console.error(
          "Error al abrir la base de datos:",
          event.target.errorCode
        );
        reject(event.target.error);
      };

      request.onsuccess = function (event) {
        resolve(event.target.result);
      };
    });

    const transaction = db.transaction(["wordGroups"], "readonly");
    const objectStore = transaction.objectStore("wordGroups");

    // Divide el texto de entrada en palabras
    const palabrasTexto = texto.split(" ");

    // Define un objeto para almacenar el diccionario
    const diccionario = {};

    // Itera a través de las palabras del texto
    for (const palabra of palabrasTexto) {
      const palabraBase = await buscarPalabraBaseEnBD(palabra, objectStore);

      if (diccionario[palabra]) {
        // La palabra base ya existe en el diccionario, incrementa su contador
        diccionario[palabra].contador++;
      } else {
        // Agrega la palabra base al diccionario
        const esComun = palabrasComunes.has(palabraBase);
        const esStopword = stopwords.has(palabraBase);

        diccionario[palabra] = {
          palabraBase: palabraBase,
          contador: 1,
          esComun: esComun,
          esStopword: esStopword,
        };
      }
    }

    // Cierra la transacción y la conexión a la base de datos
    transaction.oncomplete = function () {
      db.close();
      console.log("Diccionario construido:", diccionario);
    };

    return diccionario;
  } catch (error) {
    console.error("Ocurrió un error:", error);
    throw error;
  }
}

// Función auxiliar para buscar la palabra base en la base de datos
async function buscarPalabraBaseEnBD(palabra, objectStore) {
  return new Promise((resolve, reject) => {
    const request = objectStore.openCursor();

    request.onsuccess = function (event) {
      const cursor = event.target.result;
      if (cursor) {
        const data = cursor.value;

        if (data.words.includes(palabra)) {
          // Si la palabra está en el arreglo "words", esa es la palabra base
          resolve(data.base);
        } else {
          cursor.continue();
        }
      } else {
        // Si no se encuentra, simplemente devuelve la palabra original
        resolve(palabra);
      }
    };

    request.onerror = function (event) {
      console.error(
        "Error al buscar palabra en la base de datos:",
        event.target.error
      );
      reject(event.target.error);
    };
  });
}

export function procesarDiccionario(diccionario) {
  const diccionarioProcesado = {};

  // Iterar sobre las entradas del diccionario original
  for (const palabraOriginal in diccionario) {
    const entradaOriginal = diccionario[palabraOriginal];
    const palabraBase = entradaOriginal.palabraBase;

    let cantidadDeRepeticiones = filtrarYSumarContador(
      diccionario,
      palabraBase
    );

    diccionarioProcesado[palabraOriginal] = {
      ...diccionario[palabraOriginal],
      contador: cantidadDeRepeticiones,
    };
  }

  return diccionarioProcesado;
}

// Función para filtrar elementos por propiedad "palabraBase"
function filtrarYSumarContador(diccionario, palabraBuscada) {
  var elementosFiltrados = {};
  var sumaContador = 0;

  for (var key in diccionario) {
    if (diccionario[key].palabraBase === palabraBuscada) {
      elementosFiltrados[key] = diccionario[key];
      sumaContador += diccionario[key].contador;
    }
  }

  return sumaContador;
}
