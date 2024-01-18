//! ------------ OPERADORES DE ASIGNACIÓN --------> =

let numero = 1; // 1
numero = 3; // 3
numero = numero + 1; // 4
console.log(numero);

//! ------------ OPERADORES ARITMÉTICOS --------> + - * / %

let aritmeticos = 10; // 10
aritmeticos = 10 + 2; // 12 - suma
aritmeticos = 10 - 2; // 8 - resta
aritmeticos = 10 * 2; // 20 - multiplicación
aritmeticos = 10 / 2; // 5 - división
aritmeticos = 10 % 3; // 1 - resto de la divisón
console.log(aritmeticos);

//! ------------ OPERADORES INCREMENTO Y ASIGNACIÓN --------> += -= *= /= %=

let asociados = 10;
asociados += 2; // 12
asociados -= 2; // 10
asociados *= 2; // 20
asociados /= 2; // 10 (sobre 10 serían 5)
asociados %= 3; // 00
console.log(asociados);

//! ------------ OPERACIONES NUMBER Y STRING --------> type coertion = coversión del tipo de dato

    // number + number = number
    // string + string = string ---> concatenación de cadenas
    // number + string = string
    // boolean + boolean = number

console.log(5 + 5); // 10
console.log("hola" + "mundo"); // holamundo

console.log(2 + "hola"); // 2hola
console.log(typeof (2 + "hola")); // string

console.log(true + false); // 1 + 0 = 1
console.log(typeof(true + false)); // number


//! ------------ INCREMENTAR Y DECREMENTAR --------> ++  --
    
// Incrementar una variable en una unidad
    let y = 0;
    y++; // y = y + 1 ---> 1
    console.log(y);

    // Decrementar una variable en una unidad
    let z = 5;
    z--; // z = z - 1 ---> 4
    console.log(z);