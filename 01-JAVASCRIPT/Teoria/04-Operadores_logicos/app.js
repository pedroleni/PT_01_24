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

    // && AND

    console.log(true && true); // true
    console.log(true && false); // false
    console.log(false && true); // false
    console.log(false && false); // false

    // || OR

    console.log(true || true); // true
    console.log(true || false); // true
    console.log(false || true); // true
    console.log(false || false); // false

    // ! NOT

    console.log(!true); // false
    console.log(!false); // true