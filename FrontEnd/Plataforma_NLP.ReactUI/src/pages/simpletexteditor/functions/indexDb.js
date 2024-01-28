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
