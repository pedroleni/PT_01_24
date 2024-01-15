//! ------------ TIPOS DE DATOS --------> data type, describe el tipo de datos dentro de una variable

// Grupo Tipos de Datos primitivos o primitive

    /*
        - no llevan una estructura propia dentro
        - inmutables
        - solor llevan un valor
        - "passed by value" ---> necesita un valor definido
        - number, string, boolean, undefined, symbol
    */

// Grupo Tipos de Datos Estructurales o Reference

    /*
        - llevan dentro una estructura propia
        - nos permiten gestionar datos primitivos
        - "passed by reference" ---> por ejemplo necesita una función
        - funciones, objetos, arrays, ...
    */


//! ------------ TIPOS DE DATOS PRIMITIVOS

    // NUMBER
    let numero = 10;
    console.log(numero);
    console.log(1 + 10 + 100); //11 + 100 = 111

    // STRING ---> cadena de texto
    let cadena = "hola mundo!";
    console.log(cadena);

    let nombre = "bea";
    let apellido = "serrano";
    console.log(nombre + apellido); //ASI NO
    console.log("Me llamo " + nombre + " " + apellido); // ASI NO
    console.log(`Me llamo ${nombre} ${apellido}`); // ASI SI

    // BOOLEAN ---> verdadero o falso
    let verdad = true; // 1
    let falso = false; // 0
    console.log(verdad, falso);
    console.log(2 > 1); // true
    console.log(0 > 1); // false

        // dos operaciones seguidas con boolean
        console.log(1 < 2 < 3); // 1 < 3 true
        console.log(3 > 2 > 1); // 1 > 1 false
        console.log(3 < 2 < 1); // 0 < 1 true

    // UNDEFINED
    let vacio;
    console.log(vacio);

//! ------------ COMO SABER EL TIPO DE DATO

    // Utilizamos el operador type of() ---> nos indica el tipo de dato, parentesis opcionales

    let forma = "cuadrado";
    let cantidad = 1;
    let verdadero = true;
    let hoy = new Date();

    console.log(typeof forma);
    console.log(typeof cantidad);
    console.log(typeof verdadero);
    console.log(typeof hoy);