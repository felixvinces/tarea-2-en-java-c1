class Tarea2 {
  //-------------------------------ROUND #1---------------------------------------------------------------------------------------------------------

  // Bosquejo del problema:
  // Entrada: num=0?(recibido); acu=0?(calculada), cont=0?(inicial), r=0?(calculda), divisores=0?[arreglo]
  // Proceso: Mientras cont sea menor que num, hacer lo siguiente:
  //          -Calcular el residuo r como el resultado de dividir num por cont.
  //          -Si r es igual a 0, realizar lo siguiente:
  //                    -Incrementar acu por el valor de cont.
  //                    -Agregar cont a la lista de divisores.
  //          Incrementar cont en 1.
  // Salida:  Un objeto que contiene dos propiedades:
  //               divisores: Una lista de los divisores de num.
  //               suma: La suma acumulada de los divisores de num.

  acuDivisor(num) {
    let cont = 1,acu = 0,r = 0,divisores = [];
    while (cont < num) {
      r = num % cont;
      if (r == 0) {
        acu = acu + cont;
        divisores.push(cont);
      }
      cont = cont + 1;
    }
    return { divisores, suma: acu };
  }

  //-----------------------1.- DIVISORES--------------------------------
  // Bosquejo del problema:
  // Entrada: num=0? (leído); resultado=0? (calculado)
  // Proceso: Enviar "num" a funcion acuDivisor para calcular los divisores y la suma acumulada de los divisores de num
  // Salida:  Mostrar en el documento HTML los resultados calculados.
  divisores() {
    let resp = document.getElementById("resp");
    let num = parseInt(document.getElementById("numero").value);
    let resultado = this.acuDivisor(num);
    resp.innerHTML = `Los divisores de ${num} son: ${resultado.divisores}`;
    resp.innerHTML += `<br> La suma acumulada es: ${resultado.suma}`;
  }

  //-----------------------2.-PERFECTO---------------------------------
  // Bosquejo del problema:
  // Entrada: num=0? (leído); resultado=0? (calculado)
  // Proceso: Enviar "num" a funcion acuDivisor para calcular los divisores y la suma acumulada de los divisores de num.
  //          Verificar si la suma es igual al número original cumpliendose que un número perfecto es la suma de sus divisores, excluyendose a sí mismo.
  // Salida:  Mostrar en el documento HTML los resultados y determinar si el número es perfecto.

  perfecto() {
    let resultado = 0;
    let num = document.getElementById("num").value;
    let resp = document.getElementById("resp");
    num = parseInt(num);
    resultado = this.acuDivisor(num);
    if (resultado.suma == num) {
      resp.innerHTML = `Los divisores de ${num} son: ${resultado.divisores}`;
      resp.innerHTML += `<br> ${resultado.divisores.join(" + ")} = ${resultado.suma}`;
      resp.innerHTML += `<br> ${num} es perfecto`;
    } else {
      resp.innerHTML = `Los divisores de ${num} son: [${resultado.divisores}];`;
      resp.innerHTML += `<br> ${resultado.divisores.join(" + ")} = ${resultado.suma}`;
      resp.innerHTML += `<br> ${num} no es perfecto`;
    }
  }

  //-----------------------------------ROUND #2--------------------------------------------------------------------------------------------------------------------
  // Bosquejo del problema:
  // Entrada: n=0? (recibida); resultado=0? (calculado)
  // Proceso: Enviar "num" a funcion acuDivisor para calcular los divisores y la suma acumulada de los divisores de n.
  //          Verificar si la suma es igual a 1 para determinar si n es primo
  // Salida:  Retorna true si n es primo, false en caso contrario.

  esPrimo(n) {
    let resultado = this.acuDivisor(n);
    return resultado.suma === 1;
  }

  //----------------------3.- PRIMOS ---------------------------------------------
  // Bosquejo del problema:
  // Entrada: num=0? (leído); resultado=0? (calculado)
  // Proceso: Enviar "num" a funcion esPrimo que a su vez lo enviará a acuDivisor para calcular los divisores y la suma acumulada de los divisores de num.
  //          Verificar si num es primo.
  // Salida:  Mostrar en el documento HTML los resultados y determinar si num es primo.

  numPrimo() {
    let num = parseInt(document.getElementById("numero").value);
    let resp = document.getElementById("resp");
    let resultado = this.acuDivisor(num);

    if (this.esPrimo(num)) {
      resp.innerHTML = `Los divisores de ${num} son: ${resultado.divisores},${num}`;
      resp.innerHTML += `<br>${num} es primo`;
    } else {
      resp.innerHTML = `Los divisores de ${num} son: ${resultado.divisores},${num}`;
      resp.innerHTML += `<br>${num} no es primo`;
    }
  }

  //---------------------------4.-PRIMOS GEMELOS-----------------------------------
  // Bosquejo del problema:
  // Entrada: num1=0?, num2=0? (recibidos)
  // Proceso: Verificar si ambos num1 y num2 son números primos reutilizando la funcion esPrimo
  //             -Calcular la diferencia entre num1 y num2.
  //             -Verificar si la diferencia es igual a 2 o -2 para determinar si son primos gemelos.
  // Salida:  Retorna true si num1 y num2 son primos gemelos, false en caso contrario.

  sonPrimosGemelos(num1, num2) {
    if (this.esPrimo(num1) && this.esPrimo(num2)) {
      let diferencia = num1 - num2;
      return diferencia === 2 || diferencia === -2;
    } else {
      return false;
    }
  }

  // Bosquejo del problema:
  // Entrada: num1=0?, num2=0? (leídos)
  // Proceso: Verificar si num1 y num2 son primos gemelos utilizando la función sonPrimosGemelos().
  // Salida:  Mostrar en el documento HTML si num1 y num2 son primos gemelos o no.
  primoGemelo() {
    let num1 = parseInt(document.getElementById("numero1").value);
    let num2 = parseInt(document.getElementById("numero2").value);
    let resp = document.getElementById("resp");

    if (this.sonPrimosGemelos(num1, num2)) {
      resp.innerHTML = `${num1} y ${num2} son primos gemelos`;
    } else {
      resp.innerHTML = `${num1} y ${num2} no son primos gemelos`;
    }
  }

  //------------------------------------------ROUND #4---------------------------------------------------------------------------------------------------

  // Bosquejo del problema:
  // Entrada: arreglo=0? (recibido), buscado=0? (recibido)
  // Proceso: Inicializar pos en 0 y enc en false.
  //          Mientras pos sea menor que la longitud del arreglo y enc sea false:
  //              - Verificar si el elemento en la posición pos del arreglo es igual a 'buscado'.
  //                  - Si es igual, establecer enc en true.
  //                  - Si no es igual, incrementar pos en 1.
  //          Si enc es true, retornar la posición donde se encontró 'buscado' en el arreglo.
  //          Si enc es false, retornar -1 indicando que 'buscado' no se encontró en el arreglo.
  // Salida:  La posición de 'buscado' en el arreglo o -1 si no se encuentra.

  isbuscaArreglo(arreglo, buscado) {
    let pos = 0,
      enc = false;
    while (pos < arreglo.length && enc == false) {
      if (arreglo[pos] == buscado) {
        enc = true;
      } else {
        pos++;
      }
    }
    if (enc == true) {
      return pos;
    } else {
      return -1;
    }
  }

  //---------------------------------------------11 Buscar arreglo----------------------------
  //arr = [10,20,5,0]  bus= 20 resp= 1
  // 0 1 2 3
  //Recorrer el arreglo e ir preguntando si el elemento del arreglo
  //es = buscado. Si es igual se encontró el elemento y salimos del recorrido
  //del arreglo sino continuamos hasta el final del arreglo
  //
  buscarArreglo() {
    //debugger;
    let arreglo = document.getElementById("numeros").value;
    arreglo = arreglo.split(";");
    let buscado = document.getElementById("buscado").value;
    let resp = document.getElementById("resp");
    let posi = this.isbuscaArreglo(arreglo, buscado);
    if (posi >= 0) {
      resp.innerHTML = `${buscado} se encontró en la posición: ${posi} del arreglo`;
    } else {
      resp.innerHTML = `${buscado} no se encontró en el arreglo`;
    }
  }

  //-----------------------------------------13.-Eliminar arreglo--------------------------------------------------------
  // Bosquejo del problema:
  // Entrada: arreglo=0? (leído como una cadena y convertido a arreglo), elemento=0? (leído)
  // Proceso: Obtener la posición del 'elemento' en el 'arreglo' utilizando la función isBuscaArreglo().
  //          Si la posición es diferente de -1:
  //              - Mover los elementos desde la posición encontrada hasta el final del arreglo una posición hacia la izquierda.
  //              - Reducir la longitud del arreglo en 1.
  //              - Mostrar un mensaje indicando que el elemento ha sido eliminado y mostrar el arreglo resultante.
  //          Si la posición es -1:
  //              - Mostrar un mensaje indicando que el elemento no se encontró en el arreglo.
  // Salida:  Mensaje indicando la eliminación del elemento y el arreglo resultante o mensaje indicando que el elemento no se encontró.

  eliminarArreglo() {
    let arreglo = document.getElementById("numeros").value;
    arreglo = arreglo.split(";");
    let elemento = document.getElementById("eliminar").value;
    let resp = document.getElementById("resp");
    let posicion = this.isbuscaArreglo(arreglo, elemento);

    if (posicion !== -1) {
      for (let i = posicion; i < arreglo.length - 1; i++) {
        arreglo[i] = arreglo[i + 1];
      }
      arreglo.length--; // Reducir la longitud del arreglo
      resp.innerHTML = `Elemento ${elemento} eliminado del arreglo <br>`;
      resp.innerHTML += `El arreglo queda así: [${arreglo}] `;
    } else {
      resp.innerHTML = `Elemento ${elemento} no encontrado en el arreglo.`;
    }
  }

  //-------------------------------------------#ROUND 5----------------------------------------------------------------------------------------------------

  //--------------------------------------------12,-INSERTAR ARREGLO---------------------

  // Bosquejo del problema:
  // Entrada: cadena=0? (recibida como una cadena), elemento=0? (recibido), posicion=0? (recibido)
  // Proceso: Verificar que la 'posicion' sea un número válido dentro del rango del arreglo resultante después de dividir la 'cadena'.
  //          Si la 'posicion' es válida:
  //              - Dividir la 'cadena' en un arreglo usando ';' como delimitador.
  //              - Crear un nuevo arreglo ('nuevoArreglo') para almacenar los elementos después de insertar el 'elemento'.
  //              - Copiar los elementos antes de la 'posicion' desde el arreglo original a 'nuevoArreglo'.
  //              - Insertar el 'elemento' en la 'posicion' en 'nuevoArreglo'.
  //              - Copiar los elementos después de la 'posicion' desde el arreglo original a 'nuevoArreglo'.
  //              - Devolver 'nuevoArreglo' unido como cadena con ';' como delimitador.
  //          Si la 'posicion' no es válida:
  //              - Mostrar un mensaje indicando que se debe ingresar una posición numérica válida dentro del rango.
  // Salida:  La cadena resultante después de insertar el 'elemento' en la 'posicion' o un mensaje de error.

  insertando(cadena, elemento, posicion) {
    let arreglo = cadena.split(";");

    if (!isNaN(posicion) && posicion >= 0 && posicion <= arreglo.length) {
      let nuevoArreglo = [];
      for (let i = 0; i < posicion; i++) {
        nuevoArreglo.push(arreglo[i]);
      }
      nuevoArreglo.push(elemento);

      for (let i = posicion; i < arreglo.length; i++) {
        nuevoArreglo.push(arreglo[i]);
      }
      return nuevoArreglo.join(";");
    } else {
      return "Ingrese una posición numérica válida dentro del rango.";
    }
  }

  // Entrada: cadenaOriginal (leída), elementoAInsertar (leído), posicionInsercion (leída)
  // Proceso: Llamar a la función insertando con los parámetros proporcionados.
  // Salida: Mostrar la cadena original y la cadena resultante después de la inserción.

  insertarArreglo() {
    let cadenaOriginal = document.getElementById("arreglo").value;
    let elementoAInsertar = document.getElementById("elemento").value;
    let posicionInsercion = parseInt(document.getElementById("posicion").value);
    let resp = document.getElementById("resp");

    let nuevaCadena = this.insertando(
      cadenaOriginal,elementoAInsertar,posicionInsercion
    );
    resp.innerHTML = `Arreglo nuevo:`;
    resp.innerHTML += `<br> [${nuevaCadena}]`;
  }

  //----------------------------------------------ROUND 6-------------------------------------------------------------------------------------------------
  //------------------------------------5.-CONCATENAR DOS CADENAS-------------------------------------
  //Sin espacio
  // Bosquejo del problema:
  // Entrada: cadena1 (recibida), cadena2 (recibido), accion (recibido)
  // Proceso:
  //   - Verificar el valor de accion.
  //   - Si accion es "sin espacio", concatenar cadena1 y cadena2 sin espacio entre ellas.
  //   - Si accion es "con espacio", concatenar cadena1 y cadena2 con un espacio entre ellas.
  // Salida: Una cadena resultante de la concatenación según la acción especificada.

  concatenando(cadena1, cadena2, accion) {
    if (accion === "sin espacio") {
      return cadena1 + cadena2;
    } else if (accion === "con espacio") {
      return cadena1 + " " + cadena2;
    }
  }

  // Bosquejo del problema:
  // Entrada: cadena1 (leída), cadena2 (leída)
  // Proceso: Llamar a la función concatenando con los parámetros proporcionados y la acción "sin espacio".
  // Salida: Mostrar la cadena resultante después de la concatenación sin espacio.

  concatenarCadenasE() {
    let cadena1 = document.getElementById("cadena1").value;
    let cadena2 = document.getElementById("cadena2").value;
    let resultado = document.getElementById("resp");
    resultado.innerHTML = this.concatenando(cadena1, cadena2, "sin espacio");
  }

  //Con espacio
  // Bosquejo del problema:
  // Entrada: cadena1 (leída), cadena2 (leída)
  // Proceso: Llamar a la función concatenando con los parámetros proporcionados y la acción "con espacio".
  // Salida: Mostrar la cadena resultante después de la concatenación con espacio.

  concatenarCadenasS() {
    let cadena1 = document.getElementById("cadena1").value;
    let cadena2 = document.getElementById("cadena2").value;
    let resultado = document.getElementById("resp");
    resultado.innerHTML = this.concatenando(cadena1, cadena2, "con espacio");
  }

  //--------------------------------------------------ROUND 7-------------------------------------------------------------------------------------------------------

  //----------------------------------6.- BUSCAR UNA SUBCADENA-------------------------------------
  // Bosquejo del problema:
  // Entrada: cadena (leída), buscado (leído)
  // Proceso: Inicializar variables para posición en la cadena (posCadena, posAux) y en el buscado (posBuscado),
  //           así como longitudes de la cadena y buscado (lonCadena, lonBuscado).
  //           Usar bucles para buscar el inicio del fragmento buscado en la cadena.
  //           Si se encuentra, comparar los caracteres sucesivos para verificar si coincide con el fragmento buscado.
  //           Devolver la posición de inicio si se encuentra, de lo contrario, -1.
  // Salida: Posición del fragmento buscado en la cadena o -1 si no se encuentra.

  isbuscar(cadena, buscado) {
    let posAux = 0, posCadena = 0, posBuscado = 0, lonCadena = 0, lonBuscado = 0, enc = false;
    lonCadena = cadena.length;
    lonBuscado = buscado.length;
    while (posCadena < lonCadena && enc == false) {
      if (cadena[posCadena] == buscado[0]) {
        posAux = posCadena;
        posBuscado = 0;
        while (
          posAux < lonCadena &&
          posBuscado < lonBuscado &&
          cadena[posAux] == buscado[posBuscado]
        ) {
          posAux++;
          posBuscado++;
        }
        if (posBuscado == lonBuscado) {
          enc = true;
        } else {
          posCadena++;
        }
      } else {
        posCadena++;
      }
    }
    if (enc == true) {
      return posCadena;
    } else {
      return -1;
    }
  }

  //cade = "hola que tal " buscar= "que" resp=5
  // 0 1 2 3
  //Recorrer la cadena e ir preguntando si el valor de la cadena es igual
  //al primer caracter de buscar
  //si es, continuamos preguntando si los demás caracteres de la cadena son
  //iguales a los de buscar
  // Si se cumple la igualdada hasta el final de buscado
  //entonces salimos si se ncuentra buscar dentro de la cadena
  //sino se vuelve a preguntar desde la siguiente posición de la cadena
  //con el primer caracter de buscado. Si se llega al final de buscar
  //la cadena ha sido encontrada.

  buscarCadena() {
    //  debugger;

    let cadena = document.getElementById("cadena").value;
    let buscado = document.getElementById("buscado").value;
    let resp = document.getElementById("resp");
    let pos = this.isbuscar(cadena, buscado);
    if (pos >= 0) {
      resp.innerHTML = `"${[buscado,]}" se encontró en la posición: ${pos} del arreglo`;
    } else {
      resp.innerHTML = `${[buscado]} no se encontró `;
    }
  }

  //--------------------------------------------ROUND #8----------------------------------------------------------------------------------------------------------------
  //     let aux = "";

  //     if (accion === "insertar") {
  //         for (let i = 0; i < cadena.length; i++) {
  //             if (i === posicion) {
  //                 aux += subcadena;
  //  aux += " "; // Agrega un espacio después de la subcadena

  //     }
  //     aux += cadena[i];
  // }
  // Si la posición está al final, se agrega la subcadena y un espacio al final
  //    if (posicion === cadena.length) {
  //     aux += subcadena + " ";
  // }
  insertandoSub(cadena, subcadena, posicion) {
    let aux = "";
    for (let i = 0; i < cadena.length; i++) {
      // i=0 ; i<11;i+1+1+1+1+
      if (i === posicion) {
        //i=0,1,2,3,4  i=4 == 4
        aux += subcadena; // aux = aux+ subcadena
      }
      aux += cadena[i]; //aux= aux+cadena[i]     //poma beautifulviejao
    }

    return aux;
  }
  // ---------------7.-INSERTAR UNA SUBCADENA ----------------------
  //  comida estveryy hungry => cadena        very=>subcadena    posicion=>12

  insertarSubcadena() {
    debugger;
    let cadena = document.getElementById("cadena").value; //poma viejao
    let subcadena = document.getElementById("subcadena").value; //beautiful
    let posicion = parseInt(document.getElementById("posicion").value); // 4
    let resp = document.getElementById("resp");

    if (!isNaN(posicion) && posicion >= 0 && posicion <= cadena.length) {
      // 4 es un número? && 4>=0 && 4<= 11
      let aux = this.insertandoSub(cadena, subcadena, posicion);
      resp.innerHTML = `Cadena original: ${cadena}`;
      resp.innerHTML += `<br>Cadena modificada: ${aux}`;
    } else {
      resp.innerHTML = "Ingrese una posición válida.";
    }
  }
  //---------------8.-ELIMINAR UNA SUBCADENA-----------------------------
  // Bosquejo del problema:
  // Entrada: cadena (leída), subcadena (leída), posición (leída)
  // Proceso: Verificar si la posición es válida (numérica, mayor o igual a 0 y menor o igual a la longitud de la cadena).
  //           Si es válida, llamar a la función modificarCadena con los parámetros cadena, subcadena, posición e "eliminar".
  // Salida: Mostrar la cadena original y la cadena modificada en el elemento con id "resp".
  // Función para eliminar una subcadena en una posición específica
  eliminandoSubcadena(cadena, subcadena) {
    let posAux = 0,
      posCadena = 0,
      posSubcadena = 0,
      lonCadena = cadena.length,
      lonSubcadena = subcadena.length,
      enc = false;

    while (posCadena < lonCadena && !enc) {
      if (cadena[posCadena] !== subcadena[0]) {
        posCadena++;
      } else {
        posAux = posCadena;
        posSubcadena = 0;
        while (
          posAux < lonCadena &&
          posSubcadena < lonSubcadena &&
          cadena[posAux] === subcadena[posSubcadena]
        ) {
          posAux++;
          posSubcadena++;
        }
        if (posSubcadena === lonSubcadena) {
          enc = true;
        } else {
          posCadena++;
        }
      }
    }

    if (enc) {
      let nuevaCadena = "";
      for (let i = 0; i < posCadena; i++) {
        nuevaCadena += cadena[i];
      }
      for (let i = posCadena + lonSubcadena; i < lonCadena; i++) {
        nuevaCadena += cadena[i];
      }
      return nuevaCadena;
    } else {
      return cadena; // Con esto la cadena original si la subcadena no fue encontrada GBOBA
    }
  }

  eliminarSubcadena() {
    let cadena = document.getElementById("cadena").value;
    let subcadena = document.getElementById("subcadena").value;
    let resp = document.getElementById("resp");

    let nuevaCadena = this.eliminandoSubcadena(cadena, subcadena);

    if (nuevaCadena !== cadena) {
      resp.innerHTML =
        "Cadena original: " + cadena + "<br>Cadena modificada: " + nuevaCadena;
    } else {
      resp.innerHTML =
        "La subcadena no fue encontrada en la cadena proporcionada.";
    }
  }

  //------------------------------------------------------ROUND #9-----------------------------------------------------------------------------------------
  //-------------------9.-CONVERTIR UN ARREGLO A CADENA-----------------
  //Con (;)----
  // Bosquejo del problema:
  // Entrada: cadena (cadena de texto leida)
  // Proceso: Llamar a la función convertirArreglo con la cadena".
  //           Obtener el resultado y asignarlo a la variable arreglo.
  // Salida: Mostrar la cadena de texto original y el arreglo resultante en el elemento HTML.
  cadenaArregloP() {
    let cadena = document.getElementById("cadena").value;
    let resp = document.getElementById("resp");
    let arreglo = this.convertirArreglo(cadena);

    resp.innerHTML = `Cadena de texto: ${cadena}`;
    resp.innerHTML += `<br>Arreglo:[${arreglo}]`;
  }

  // Bosquejo del problema:
  // Entrada: cadena (cadena de texto)
  // Proceso: Inicializar un arreglo vacío y una subcadena vacía. Recorrer la cadena.
  //           - Si el carácter actual es ";", agregar la subcadena al arreglo y reiniciarla.
  //           - Si el carácter no es ";", concatenar el carácter a la subcadena.
  //           Al final del recorrido, agregar la última subcadena al arreglo (si no está vacía).
  // Salida: Arreglo resultante de la conversión.

  convertirArreglo(cadena) {
    let arreglo = [];
    let subcadena = "";

    for (let i = 0; i < cadena.length; i++) {
      if (cadena[i] === ";") {
        arreglo.push(subcadena);
        subcadena = "";
      } else {
        subcadena += cadena[i];
      }
    }

    // Recordar que con esto agrego la última subcadena si no termina con ;
    if (subcadena !== "") {
      arreglo.push(subcadena);
    }

    return arreglo;
  }

  //Sin (";")---------------
  // Bosquejo del problema:
  // Entrada: cadena (cadena de texto)
  // Proceso: Llamar a la función cArreglo con la cadena.
  //           Obtener el resultado y asignarlo a la variable arreglo.
  // Salida: Mostrar la cadena de texto original y el arreglo resultante en el elemento HTML.
  cadenaArregloS() {
    let resp = document.getElementById("resp");
    let cadena = document.getElementById("cadena").value;
    let arreglo = this.cArreglo(cadena);
    resp.innerHTML = `Arreglo=[${arreglo.join(", ")}]`;
  }

  // Bosquejo del problema:
  // Entrada: cadena (cadena de texto)
  // Proceso: Llamar a la función cArreglo con la cadena.
  //           Obtener el resultado y asignarlo a la variable arreglo.
  // Salida: Retornar el arreglo resultante.
  cArreglo(cadena) {
    let arreglo = [];

    for (let i = 0; i < cadena.length; i++) {
      arreglo.push(cadena[i]);
    }

    return arreglo;
  }

  //------------------------------------------------------ROUND #10-----------------------------------------------------------------------------------------

  //-----------------------10.-MAYOR DE UN ARREGLO--------------

  // Bosquejo del problema:
  // Entrada: Un arreglo de números (recibido).
  // Proceso: Inicializar la variable mayor con el primer elemento del arreglo.
  //          Recorrer el arreglo y encontrar el mayor, ignorando elementos no numéricos.
  // Salida: El número mayor encontrado en el arreglo.
  mayorEncontrado(arreglo) {
    let mayor = parseFloat(arreglo[0]);

    for (let i = 1; i < arreglo.length; i++) {
      let numActual = parseFloat(arreglo[i]);
      if (!isNaN(numActual) && numActual > mayor) {
        mayor = numActual;
      }
    }
    return mayor;
  }

  // Bosquejo del problema:
  // Entrada: Una cadena de números separados por punto y coma.
  // Proceso: Convertir la cadena en un arreglo de números y encontrar el mayor.
  // Salida: Mostrar la cadena original y el mayor encontrado en un elemento HTML.
  mayorArreglo() {
    let arreglo = document.getElementById("arreglo").value;
    let resp = document.getElementById("resp");

    arreglo = arreglo.split(";");
    let mayor = this.mayorEncontrado(arreglo);

    resp.innerHTML = `Arreglo=[${arreglo.join(", ")}]`;
    resp.innerHTML += `<br> Mayor del arreglo: ${mayor}`;
  }

  //-----------------------------------------------ROUND #11--------------------------------------------------------------------------------------------------------------------
  //-------------------------------14.- CONVERTIR CADENA A ARREGLO------------------------

  // Bosquejo del problema:
  // Entrada: Una cadena de texto con números separados por punto y coma.
  // Proceso: Recorrer la cadena y dividirla en subcadenas utilizando el punto y coma como separador.
  //          Almacenar las subcadenas en un arreglo.
  // Salida: El arreglo resultante después de la conversión.
  convertirCadena(arreglo) {
    let cadena = "";

    for (let i = 0; i < arreglo.length; i++) {
      cadena = cadena + arreglo[i];

      if (i < arreglo.length - 1) {
        cadena = cadena + ",";
      }
    }
    return cadena;
  }

  // Bosquejo del problema:
  // Entrada: Una cadena leída de texto con números separados por punto y coma.
  // Proceso: Llamar a la función convertirArreglo con la cadena de entrada.
  // Salida: Mostrar la cadena original y el arreglo resultante en el elemento de respuesta.

  arregloCadena() {
    let arreglo = document.getElementById("arreglo").value;
    arreglo = arreglo.split(";");
    let resp = document.getElementById("resp");
    let cadena = this.convertirCadena(arreglo);

    resp.innerHTML = `Arreglo=[${arreglo.join(", ")}]`;
    resp.innerHTML += `<br> Cadena de texto: ${cadena}`;
  }

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------
  //----------------Bases 10------------------------------

  // Bosquejo del problema:
  // Entrada:
  // - valor: Cadena de caracteres representando el número en base 10.
  // - base: Base a la cual se desea convertir el número.

  // Proceso:
  // - Verificar si el valor es "0".
  //   - Si es 0, retornar "0".
  // - Verificar si el valor no es un número válido.
  //   - Si no es válido, retornar "Por favor, ingrese un número válido".
  // - Convertir el valor a un entero en base 10.
  // - Inicializar un arreglo 'caracteresHexadecimales' que contiene los caracteres hexadecimales.
  // - Inicializar una cadena vacía 'resultado'.
  // - Iniciar un bucle mientras 'valor' sea mayor que 0:
  //   - Calcular el residuo al dividir 'valor' por 'base' y almacenarlo en la variable 'residuo'.
  //   - Agregar el carácter correspondiente de 'caracteresHexadecimales' al inicio de 'resultado'.
  //   - Actualizar 'valor' dividiéndolo por 'base'.
  // - Retornar el resultado obtenido.

  // Salida:
  // - resultado: Cadena de caracteres que representa el número convertido a la base especificada.


  convirtiendoBase10(valor, base) {
    if (valor === "0") {
      return "0";
    }

    if (isNaN(valor)) {
      return "Por favor, ingrese un número válido.";
    }

    valor = parseInt(valor, 10);
    const caracteresHexadecimales = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F",];

    let resultado = "";
    while (valor > 0) {
      let residuo = valor % base;

      resultado = caracteresHexadecimales[residuo] + resultado;

      valor = (valor - residuo) / base;
    }

    return resultado;
  }

  // Bosquejo del problema:
  // Entrada:
  // - valor: Valor en base 10 obtenido desde un elemento de la interfaz de usuario.
  // - base: Base a la cual se desea convertir el número, obtenida desde un elemento de la interfaz de usuario.

  // Proceso:
  // - Obtener el valor desde un elemento de la interfaz de usuario.
  // - Obtener la base desde un elemento de la interfaz de usuario.
  // - Obtener el elemento de respuesta desde la interfaz de usuario.
  // - Llamar a la función 'convirtiendoBase10' con el valor y la base.
  // - Actualizar el contenido del elemento de respuesta con el resultado.

  // Salida:
  // - El resultado de la conversión se muestra en un elemento de la interfaz de usuario.


  convertirBase10() {
    let valor = document.getElementById("numeroBase10").value;
    let base = parseInt(document.getElementById("base").value);
    let resp = document.getElementById("resp");
    let resultado = this.convirtiendoBase10(valor, base);

    resp.innerHTML = `El resultado en Base ${base}: ${resultado}`;
  }
  //---------------------------------------------------------------------------------------------------------------------------------------------
  //---------------Bases 2------------------------------------

  // Bosquejo del problema:

  // Entrada:
  // - valor: Una cadena de caracteres representando un número en formato binario.
  // - base: La base a la cual se desea convertir el número binario (por ejemplo, 16 para hexadecimal).

  // Proceso:
  // - Inicializar una variable 'resultado' como una cadena vacía.
  // - Convertir 'valor' a un entero en base 10 utilizando 'parseInt(valor, 2)'.
  // - Verificar si el valor convertido es un número válido:
  //   - Si no es un número válido, retornar "Ingrese un número binario válido."
  // - Verificar si el valor convertido es 0:
  //   - Si es 0, retornar "0".
  // - Inicializar un arreglo 'caracteresHexadecimales' que contiene los caracteres hexadecimales.
  // - Iniciar un bucle mientras 'valor' sea mayor que 0:
  //   - Calcular el residuo al dividir 'valor' por 'base' y almacenarlo en la variable 'digito'.
  //   - Si 'base' es 16, agregar el carácter correspondiente del arreglo 'caracteresHexadecimales' al inicio de 'resultado'.
  //   - Si no, agregar el 'digito' al inicio de 'resultado'.
  //   - Actualizar 'valor' dividiéndolo por 'base'.
  // - Retornar el resultado obtenido.

  // Salida:
  // - resultado: Una cadena de caracteres que representa el número convertido a la base especificada.
  //   En caso de un número binario inválido, se devuelve un mensaje de error.


  convirtiendoBase2(valor, base) {
    let resultado = "";

    valor = parseInt(valor, 2);

    if (isNaN(valor)) {
      return "Ingrese un número binario válido.";
    }

    if (valor === 0) {
      return "0";
    }

    const caracteresHexadecimales = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F",];

    while (valor > 0) {
      let digito = valor % base;

      if (base === 16) {
        resultado = caracteresHexadecimales[digito] + resultado;
      } else {
        resultado = digito + resultado;
      }

      valor = (valor - digito) / base;
    }

    return resultado;
  }

   // Bosquejo del problema:
   // Entrada:
   // - valor: Valor binario obtenido desde un elemento de la interfaz de usuario.
   // - base: Base a la cual se desea convertir el número binario, obtenida desde un elemento de la interfaz de usuario.

   // Proceso:o.
   // - Llamar a la función 'convirtiendoBase2' con el valor y la base.
   // - Actualizar el contenido del elemento de respuesta con el resultado.

   // Salida:
   // - El resultado de la conversión se muestra en un elemento de la interfaz de usuario.

  convertirBase2() {
    let valor = document.getElementById("numeroBase2").value;
    let base = document.getElementById("base").value;
    let resp = document.getElementById("resp");

    let resultado = this.convirtiendoBase2(valor, parseInt(base));

    resp.innerHTML = `El resultado en Base ${base}: ${resultado}`;
  }
}

let pros = new Tarea2();
