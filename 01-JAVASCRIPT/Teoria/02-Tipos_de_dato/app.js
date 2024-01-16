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


//! ------------ TIPOS DE DATOS ESTRUCTURALES --- arrays, objetos, funciones

    // ARRAYS --- lista ordenada de datos ---  array dentro --- 
        // [0,1,2,...] --- empieza a contar por 0

    let ordenada = [0, 'hola', 12, 250, [1, 2]]
    console.log(ordenada[4][1]);

    // OBJECT --- lista desordenada de datos --- parejas de datos
        // {llave : valor,}
        // {key : value,}
        // {propiedad : valor,}

    let desordenada = {
        "nombre" : "Bea",
        "apellido" : "Serrano",
        "edad" : 33,
        pausaCafe : function () {
            console.log("descanso!");
        },
        hobbies : ['perros', 'codigo']
    }
    console.log(desordenada.nombre);
    console.log(desordenada.pausaCafe());
    console.log(desordenada.hobbies[0]);

    let user = {
        'name' : 'Luke Skywalker',
        'age' : 30,
        'work' : 'jedi',
        'parents' : ['Anakin', 'Padme'],
        'home' : {
            'name' : 'Tatooine',
            'type' : 'desert',
            'races' : ['human', 'hutt', 'jawa'],
        },
        'fight' : function (weapon) {
            console.log(`${this.name} fights with ${weapon}`); //string interpolation ``
        }
    }

    console.log(user.name);
    console.log(user.age);
    console.log(user.fight('espada laser'));

    let myAvenger = new Object();
    //myAvenger = {}
    myAvenger.name = 'Captain America';
    /* myAvenger = {
        name : 'Captain America',
    } */
    myAvenger.power = 80;
    /* myAvenger = {
        name : 'Captain America',
        power : 80,
    } */
    console.log(myAvenger);
    //{name : 'Captain America', power : 80}


    // FUNCTION
        //bloque de código
        //se puede utilizar todas las veces que queramos
        //reutilizamos llamando a la funcion

        /* function name(parametros) {
            instruccion
        } */

        function saluda(persona, trabajo) {
            console.log(`Hola ${persona} eres ${trabajo}`);
        }

        //parametros se separan por coma

        saluda('Bea', 'desarrolladora web') //lamada a la funcion con string
        saluda('Angel', "fisio")
        saluda(user.name, user.work) //lamada a la funcion con propiedad de objeto
        saluda(desordenada.nombre, desordenada.apellido)

        // ejercicio area rectangulo - base x altura
            // crear una funcion OK
            // dos parametros - base, altura OK
            // instruccion - multiplicar parametros OK
            // llamar a la funcion

            function areaRectangulo1(base, altura) {
                console.log(`el area del rectangulo es ${base * altura}`);
            }
            areaRectangulo1(10, 5)

            // dos formas de llamar a la funcion

                // function declaration + return

                function areaRectangulo2(base, altura) {
                    return `el area del rectangulo es ${base * altura}`
                }
                console.log(areaRectangulo2(2, 4));

                // function expression

                let area = function (base, altura) {
                    return `el area del rectangulo es ${base * altura}`
                }
                console.log(area(2,2));

                // arrow function

                let uno = 5;
                let dos = 2;
                area2 = (base, altura) => `el area del rectangulo es ${base * altura}`
                console.log(area2(uno, dos));


    //METODOS modificar arrays

    let frutas = ['pera', 'manzana', 'kiwi', 'naranja']
    let postres = ['tarta', 'brownie']
    let bebidas = ['agua', 'cocacola', 'cafe']
    console.log(frutas.concat(postres, bebidas)); // concatena el primer array con el segundo, tercero, ...
    frutas[0] = 'mandarina' // modificar elemento 0
    console.log(frutas);
    console.log(frutas.length); //cuantos elementos tiene el array - longitud --- 4
    frutas[4] = 'platano' // añadir elemento posicion 4
    console.log(frutas);
    console.log(frutas.pop()); //saca el ultimo elemento
    console.log(frutas);
    console.log(frutas.push('uvas')); // añade ultimo elemento
    console.log(frutas);
    console.log(frutas.shift()); // saca el primer elemento
    console.log(frutas);

    const meses = ['Enero', 'Marzo', 'Abril', 'Junio'];
    //splie --- devuelve un array
    //array.splice(posicion, eliminar o no, valor)
    meses.splice(1, 0, 'Febrero') // añade Febrero a la posicion 1 + no elimina el valor de la posicion 1 + modifica el array
    console.log(meses); //['Enero', 'Febrero', 'Marzo', 'Abril', 'Junio']

    meses.splice(4, 1, 'Mayo') // añade Mayo a la posicion 4 + elimina el valor de la posicion 4 + modifica el array
    console.log(meses); //['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']

    