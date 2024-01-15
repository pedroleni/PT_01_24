//! ------------ SINTAXIS VARIABLE --------> caja donde almaceno información
    // Declaración de la variable -> ponerle nombre a la caja
    // Inicialización de la variable -> meter algo dentro de la caja

    let nombre = "Bea"; // keyword nombre = valor;
    console.log(nombre); // imprimir en la consola

//! ------------ TIPOS DE VARIABLES --------> let, const, var

    // var ---> obsoleta

        var apellido = "serrano";
        var apellido = "lucio";
        console.log(apellido);

    //let ---> valor reasignable, no es necesario inicializarla al declararla

        let edad; //declaración
        edad = 33; //inicialización
        edad = 25; //reasignación
        console.log(edad);

    // const ---> no reasignable, valor fijo, declarar e incializar

        const mascota = "Uma"; //declaración e inicialización
        console.log(mascota);


//! ------------ NOMBRAR VARIABLES --------> qué no hacer

    /*
        - no espacios, no tildes, no ñ ---> let hola mundo XXX
        - no poner solo números ---> let 1 XXX
        - el número nunca va el inicio ---> let 1uno XXX
        - no guiones en medio ---> let hola-mundo XXX
        - usar palabras reservadas ---> let, const, function, true, if, ...
    */

//! ------------ NOMBRAR VARIABLES --------> buenas prácticas

    /*
        - camelCase ---> let holaMundo
        - texto y un número detras ---> let uno1
    */