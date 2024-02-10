//! ------------ OPERADORES DE COMPARACIÓN --------> == === != !== > < >= <=

    // Devuelve un tipo de dato boolean

    //! ---> == comprueba el valor ---> abstract equiality comparison
    //! ---> === comprueba el valor y el tipo de dato ---> strict equiality comparison
    //! ---> != distinto valor
    //! ---> !== distinto valor y tipo de dato

    let x = 2;
    let y = "2";
    let z = 1;

    console.log(x == y); // true
    console.log(x === y); // false
    console.log(x != y); // false
    console.log(x !== y); // true
    console.log(x < y); //false
    console.log(x > z); // true
    console.log(x <= z); // false
    console.log(x >= z); // true


//! ------------ OPERADORES LÓGICOS --------> && || !

    // Devuelve un tipo de dato boolean

    // && AND --- verifica que ambas se cumple -> all true = true

    console.log(true && true); // true
    console.log(true && false); // false
    console.log(false && true); // false
    console.log(false && false); // false

    let tengoCoche = false;
    let tengoCarnet = true;
    let puedoconducir = tengoCoche && tengoCarnet;
    console.log(puedoconducir); // NOOOOO puedes!! FALSE

    // || OR --- all false = false -> si hay un true se cumple

    console.log(true || true); // true
    console.log(true || false); // true
    console.log(false || true); // true
    console.log(false || false); // false

    let efectivo = false;
    let tarjeta = true;
    let puedoPagar = efectivo || tarjeta;
    console.log(puedoPagar); // SII puedes pagar! TRUE
    console.log(!puedoPagar); // NOO puedes pagar! FALSE

    // ! NOT

    console.log(!true); // false
    console.log(!false); // true


    //! ------------ OPERADOR DELETE --------> elimina la propiedad de un objeto

    // donde NO usar delete

    let uno = 1;
    let dos = 2;
    let tres = 3;

    delete uno; // false
    delete dos; // false
    delete tres; // false

    console.log(uno);
    console.log(dos);
    console.log(tres);

    //donde SI podemos usar delete

    let alumno = {
        name : 'David',
        edad : 30,
    }
    delete alumno.edad; // true --- necesita indicación de la propiedad
    console.log(alumno); // borra la propiedad y su valor


    // cuidado con los array - deja elemento empty (vacio)

    let transporte = ['bus', 'coche', 'moto'];

    console.log(transporte);
    console.log(transporte.length);

    delete transporte[1]; 
    console.log(transporte);
    console.log(transporte.length);
    console.log(transporte[1]);


    //! ------------ OPERADORES RELACIONALES

    // in ---> devuelve true si la PROPIEDAD dada está en el objeto ---> true o false

    let transportes = ['bus', 'coche', 'moto', 'bici', 'patinete'];
    console.log(transporte.length);
    console.log(0 in transportes); // true - 0 es una propiedad del array
    console.log(4 in transportes); // true
    console.log(7 in transportes); // false - solo hay 5 elementos
    console.log('length' in transportes); // true - lenght es una propiedad del array
    console.log('bus' in transportes); // false - es un valor no una propiedad

    let coche = {
        // propiedad : valor
        marca : 'Toyota',
        modelo : 'Auris',
        km : 10.000
    }
    console.log('km' in coche); // true - km es una propiedad del objeto
    console.log('Auris' in coche); // false - Auris es un valor de una propiedad

    //instanceof - comprobamos si un objeto es de un tipo que queramos - true o false

    let saludo = new String('hola')
    console.log(typeof saludo); //objeto
    let fecha = new Date();
    console.log(typeof fecha); //objeto

    console.log(saludo instanceof String); //true
    console.log(fecha instanceof Date); //true
    console.log(saludo instanceof Object); //true
    console.log(saludo instanceof Function); //true


    //! ------------ OPERADORES DE AGRUPACION ()

        let a = 1;
        let b = 2;
        let c = 3;

        console.log(a + b * c); // a + (b * c) = 7
        console.log((a + b) * c); // 3 * 3 = 9