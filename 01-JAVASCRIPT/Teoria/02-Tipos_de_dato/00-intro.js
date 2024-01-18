//! ------------ TIPOS DE DATOS --------> data type, describe el tipo de datos dentro de una variable

// Grupo Tipos de Datos primitivos o primitive

    /*
        - no llevan una estructura propia dentro
        - inmutables
        - solor llevan un valor
        - "passed by value" ---> necesita un valor definido
        - number, string, boolean, undefined, symbol (obsoleto)
    */

// Grupo Tipos de Datos Estructurales o Reference

    /*
        - llevan dentro una estructura propia
        - nos permiten gestionar datos primitivos
        - "passed by reference" ---> por ejemplo necesita una función
        - funciones, objetos, arrays, ...
    */

//! ------------ COMO SABER EL TIPO DE DATO

    // Utilizamos el operador type of() ---> nos indica el tipo de dato, parentesis opcionales

    let forma = 'cuadrado';
    let tamano = 10;
    let aleatorio = true;
    let frutas = ['manzana', 'kiwi', 'platano'];
    let hoy = new Date();
    let miFuncion = new Function('5+2');
    let coche = {
        marca : 'Toyota',
        modelo : 'Auris',
        km : 100.000
    }

    console.log(typeof forma); // string
    console.log(typeof tamano); // number
    console.log(typeof aleatorio); // boolean
    console.log(typeof frutas); // array - en la consola object
    console.log(typeof hoy); // function - en la consola object
    console.log(typeof miFuncion); // function - en la consola function
    console.log(typeof coche); // object - en la consola object