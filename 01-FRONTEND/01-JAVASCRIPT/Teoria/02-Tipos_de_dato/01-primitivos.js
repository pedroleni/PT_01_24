//! ------------ TIPOS DE DATOS PRIMITIVOS


//! NUMBER ---> numérico


    let numero = 10;
    console.log(numero);
    console.log(1 + 10 + 100); //11 + 100 = 111

    let numero1 = 1;
    let numero2 = -2;
    let numero3 = 0.4534;

        // METODOS NUMBER

            // isInteger
                //comprueba si es entero
                // devuelve boolean - true o false
                
            console.log(Number.isInteger(numero1)); //true porque es entero
            console.log(Number.isInteger(numero3)); //false porque es decimal

    //NaN = not a number

        //isNaN - comprobar que no es un tipo de dato number
        // devuelve true o false
        // si el valor es convertible a number - false - si es nun numero

        console.log(isNaN(10)); // false - si es number
        console.log(isNaN(false)); // false - si es number - false = 0
        console.log(isNaN("50")); // false - es un string con un número dentro
            console.log(isNaN('coche')); // true - es un string

        // parseInt
            // convertir string en number
            // devuelve number

            console.log(parseInt('50')); //50
            console.log(typeof (parseInt('50'))); //number

            console.log(parseInt('hola')); // NaN - not a number

            console.log(parseInt(true)); // NaN
            console.log(typeof (parseInt(true))); // number


        // toString
            // convertir number en string - con el mimso valor

            let numeroToString = 500;
            console.log(numero.toString()); // '500'
            console.log(typeof (numero.toString())); // string


//! STRING ---> cadena de texto

    let cadena = "hola mundo!";
    console.log(cadena);

    let nombre = "bea";
    let apellido = "serrano";
    console.log(nombre + apellido); //ASI NO
    console.log("Me llamo " + nombre + " " + apellido); // ASI NO
    console.log(`Me llamo ${nombre} ${apellido}`); // ASI SI

    
    let cadena1 = 'hola'; // comillas simples ---> [0] = h , [1] = o ...
    let cadena2 = "saludo a 'Bea'"; // comillas dobles - dentro ''
    let cadena3 = `hola Bea`; // string interpolation - encapsular otro dato ${...}

    console.log(cadena1.length); // [h, o, l, a] = 4
    console.log(cadena1[1]); // o

    // METODOS STRING

        // replace

            // devuelve un string
            // dos argumentos
            // sustituye un string primero por un string segundo - solo una vez

            let nombre2 = 'Bea Serrano';
            console.log(nombre);
            console.log(nombre.replace('Serrano', 'Lucio'));

        //replaceAll

            // devuelve un string
            // dos argumentos
            // sustiye un string por otro todas la veces que se lo encuentra

            let texto = 'hola, me llamo Bea y tengo un perro. Mi perro es un border collie'
            console.log(texto);
            console.log(texto.replaceAll('perro', 'huron'));

        // slice

            // devuelve un string
            // dos argumentos - inicio, fin
            // nuevo string con las posiciones que le indiquemos - ambos se incluyen

            let pelicula = 'La sociedad de la nieve'
            console.log(pelicula.slice(0, 10));


        // split

            // devuelve un array con los elementos que indiquemos
            // dos argumentos

            let bienvenida = 'hola, bienvenida a tu nueva casa'
            console.log(bienvenida.split(" ", 3)); // [ 'hola,', 'bienvenida' ]
            console.log(bienvenida.split("", 2)); // [ 'h', 'o' ]
            console.log(bienvenida.split("")); // cada caracter en un elemento del array


        // includes 

            // devuelve true o false
            // incluye o no el valor dado - caracter o conjunto de caracteres
            // podemos incluir más de un valor

            let despedida = 'adios, que te lo pases guay'
            console.log(despedida.includes('z')); //false
            let adios = 'adios'
            console.log(despedida.includes(adios)); //true


        // toLowerCase - convierte a minuscula un string

            let correo = 'Bea@GMAIL.com'
            console.log(correo.toLowerCase()); //bea@gmail.com

        // toUpperCase - convierte a mayúscula un string

            let dni = '4657398g'
            console.log(dni.toUpperCase()); //4657398G

        // trim
            //elimina espacios en blanco
            //espacios de principio y espacios del final

            let frase = '   buenos dias a todas   '
            console.log(frase.trim()); //buenos dias a todas

//! BOOLEAN ---> true o false

    let verdad = true; // 1
    let falso = false; // 0
    console.log(verdad, falso);
    console.log(2 > 1); // true
    console.log(0 > 1); // false

        // dos operaciones seguidas con boolean
        console.log(1 < 2 < 3); // 1 < 3 true
        console.log(3 > 2 > 1); // 1 > 1 false
        console.log(3 < 2 < 1); // 0 < 1 true

//! UNDEFINED ---> no tiene un valor definido

    let vacio;
    console.log(vacio); //undefined

