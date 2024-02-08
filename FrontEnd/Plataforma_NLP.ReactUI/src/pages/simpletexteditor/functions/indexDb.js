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

export function openDataBase(callback) {
  const request = indexedDB.open("freelingDB", 1);

  request.onerror = function (event) {
    console.error("Error al abrir la base de datos:", event.target.error);
  };

  request.onsuccess = function (event) {
    const db = event.target.result;
    callback(db);
  };

  request.onupgradeneeded = function (event) {
    const db = event.target.result;

    // Crea una tabla para almacenar los datos si no existe
    if (!db.objectStoreNames.contains("tablaPalabras")) {
      db.createObjectStore("tablaPalabras", { keyPath: "palabra" });
    }
  };
}

export function addDataToDataBase(db, datos) {
  const transaction = db.transaction(["tablaPalabras"], "readwrite");
  const store = transaction.objectStore("tablaPalabras");

  for (const palabraBase in datos) {
    const palabrasRelacionadas = datos[palabraBase];

    // Comprobar si la palabra base ya existe en la base de datos
    const request = store.get(palabraBase);

    request.onsuccess = function (event) {
      const existingData = event.target.result;

      if (existingData) {
        // Si la palabra base ya existe, actualizamos las palabras relacionadas sin duplicados
        const palabrasUnicas = new Set(
          existingData.palabrasRelacionadas.concat(palabrasRelacionadas)
        );
        const updatedData = {
          palabra: palabraBase,
          palabrasRelacionadas: Array.from(palabrasUnicas),
        };
        store.put(updatedData);
      } else {
        // Si no existe, creamos un nuevo registro
        const newData = { palabra: palabraBase, palabrasRelacionadas };
        store.add(newData);
      }
    };

    request.onerror = function (event) {
      console.error("Error al buscar la palabra base:", event.target.error);
    };
  }

  transaction.oncomplete = function () {
    console.log("Datos agregados con éxito.");
  };

  transaction.onerror = function (event) {
    console.error("Error al agregar datos:", event.target.error);
  };
}

export function eliminarPalabrasRelacionadasDelTexto(db, texto, callback) {
  const transaction = db.transaction(["tablaPalabras"], "readonly");
  const store = transaction.objectStore("tablaPalabras");

  const palabrasEnTexto = texto.split(/\s+/); // Dividir el texto en palabras

  const palabrasRelacionadasEnDB = new Set(); // Conjunto para almacenar palabras relacionadas en la base de datos

  palabrasEnTexto.forEach((palabra) => {
    // Buscar la palabra en la base de datos
    const request = store.openCursor();

    request.onsuccess = function (event) {
      const cursor = event.target.result;

      if (cursor) {
        const data = cursor.value;

        if (data.palabrasRelacionadas.includes(palabra)) {
          // Agregar la palabra relacionada de la base de datos al conjunto
          palabrasRelacionadasEnDB.add(palabra);
        }

        cursor.continue();
      }
    };

    request.onerror = function (event) {
      console.error(
        "Error al buscar palabras relacionadas:",
        event.target.error
      );
    };
  });

  transaction.oncomplete = function () {
    // Filtrar las palabras en el texto para eliminar las que están en palabrasRelacionadasEnDB
    const palabrasFiltradas = palabrasEnTexto.filter(
      (palabra) => !palabrasRelacionadasEnDB.has(palabra)
    );

    // Reconstruir el texto con las palabras filtradas
    const textoFiltrado = palabrasFiltradas.join(" ");

    // Llamar al callback con el texto filtrado
    callback(textoFiltrado);
  };

  transaction.onerror = function (event) {
    console.error("Error al consultar la base de datos:", event.target.error);
  };
}

export function buscarPalabraBase(db, palabraABuscar, callback) {
  const transaction = db.transaction(["tablaPalabras"], "readonly");
  const store = transaction.objectStore("tablaPalabras");

  const request = store.openCursor();
  let palabraBaseEncontrada = false;

  request.onsuccess = function (event) {
    if (palabraBaseEncontrada) {
      // Si ya encontramos la palabra base, no hacemos nada más
      return;
    }

    const cursor = event.target.result;

    if (cursor) {
      const data = cursor.value;

      if (data.palabrasRelacionadas.includes(palabraABuscar)) {
        // Si encontramos la palabra en palabrasRelacionadas, esta es la palabra base
        callback(data.palabra);
        palabraBaseEncontrada = true; // Establecemos la variable para evitar ejecutar más veces
      }

      cursor.continue();
    } else if (!palabraBaseEncontrada) {
      // Si no se encuentra ninguna coincidencia y no se ha encontrado la palabra base, informamos que no se encontró
      callback(null);
    }
  };

  request.onerror = function (event) {
    console.error("Error al buscar palabra base:", event.target.error);
    callback(null);
  };
}
