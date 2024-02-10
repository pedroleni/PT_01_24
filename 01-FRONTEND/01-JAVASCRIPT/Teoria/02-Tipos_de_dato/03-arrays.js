//! ------------ ARRAY --- lista ordenada de datos ---  array dentro
        
    // [0,1,2,...] --- empieza a contar por 0

        //crear array con llaves [] --- más común

            let arrayLlave = [0, 'hola', 12, 250, [1, 2]]
            console.log(arrayLlave[4][1]); // [1,2] -> 2 - number

        //crear array con una funcion

            let arrayFuncion = new Array('hola', 'neoland'); // ['hola'. 'neoland']
            console.log(arrayFuncion[0]);
            console.log(arrayFuncion.length); // 2 - number

        // mezclar datos en un array

            let mezcla = ['hola', 10, {name:'bea', apellido:'serrano'}, true, function () {console.log('hola gente!');}]
            console.log(mezcla[0]); // hola
            console.log(mezcla[2].apellido); // serrano
            console.log(mezcla[4]()); // hola gente!

            //objects dentro de array

            let arrayObjeto = [
                {
                    name:'bea', 
                    apellido:'serrano'
                },
                {
                    name:'bea', 
                    apellido:'serrano'
                },
            ]


    //! Métodos para manejar y modificar arrays

            //! push()

                // añade elementos al final del array
                // devuelve longitud del array
                // modifica el array

                let frutas = ['platano', 'manzana']
                frutas.push('naranja');
                console.log(frutas); // [ 'platano', 'manzana', 'naranja' ]
            
            //! pop()

                // elimina el último elemento del array
                // devuelve el último elemento
                // modifica el array

                //let frutas = [ 'platano', 'manzana', 'naranja' ]
                frutas.pop() // elimina 'naranja'
                console.log(frutas); // [ 'platano', 'manzana' ]

            //! unshift()

                // añade elementos al inicio del array
                // devuelve el elemento
                // modifica el array

                //let frutas = ['platano', 'manzana']
                frutas.unshift('naranja') // añade 'naranjas'
                console.log(frutas); // [ 'naranja', 'platano', 'manzana' ]

            //! shift()

                // elimina el primer elemento del array
                // devuelve el elemento
                // modifica el array

                //let frutas = [ 'naranja', 'platano', 'manzana' ]
                frutas.shift() // elimina 'naranja'
                console.log(frutas); // ['platano', 'manzana']

            //! slice()

                // devuelve una copia de un array con parte de otro array
                // dos argumentos: indice de inicio, indice de fin
                // no modifica el array de origen, crea uno nuevo

                let transporte = ['bus', 'coche', 'moto', 'bici'];
                let miTransporte = transporte.slice(1,3);
                console.log(transporte); // ['bus', 'coche', 'moto', 'bici']
                console.log(miTransporte); // ['coche', 'moto']

            //! splice()

                // elimina o añade elementos en un indice especifico
                // 3 o más argumentos
                    // indice de inicio - donde empieza
                    // numero de elementos a borrar
                    // nuevo elemento ...
                // modifica el array

                //let transporte = ['bus', 'coche', 'moto', 'bici'];
                transporte.splice(0, 2, 'patinete electrico', 'skate') // elimina bus y coche y añade pati... y skate
                    // 0 -> se coloca en 'bus'
                    // 2 -> elimina 'bus', 'coche'
                    // elementos -> añade 'patinete electrico', 'skate'
                console.log(transporte); // [ 'patinete electrico', 'skate', 'moto', 'bici' ]

            //! concat()

                // concatena dos o más arrays
                // argumentos: array inicial, array2, array3, ...
                // separados con coma ,
                // crea un nuevo array

                let array1 = ['angel', 'sandra', 'sebas']
                let array2 = ['david', 'dani', 'elena']
                let array3 = ['laura', 'marius']

                let arrayConcatenado1 = array1.concat(array2) // [ 'angel', 'sandra', 'sebas', 'david', 'dani', 'elena' ]
                console.log(arrayConcatenado1);

                let arrayConcatenado2 = array1.concat(array2, array3) // ['angel', 'sandra', 'sebas', 'david', 'dani','elena', 'laura', 'marius']
                console.log(arrayConcatenado2); 

            //! forEach

                // ejecuta una función dada en cada elemento del array
                // recorre todos los elementos del array
                // parametro dentro de la funcion

                    /* SINTAXIS
                    
                    array1.forEach(
                        function(parametro){
                            instruccion
                        }
                    ) */

                let animales = ['gato', 'perro', 'huron']
                let animalIndividual = animales.forEach(
                    function (animal) {
                        console.log(animal); // gato, perro, huron
                        console.log(animal.toUpperCase()); // GATO, PERRO, HURON
                    }
                )

            
            //! includes()

                // dice si el array incluye o no un elemento dado - es el argumento
                // devuelve true o false
                // no modifica el array
                
                //let animales = ['gato', 'perro', 'huron']
                let respuestaPerro = animales.includes('perro') // true
                let respuestaRata = animales.includes('rata') // false
                

            //! indexOf

                // index - indice
                // devuelve el primer indice donde se encuentra un elemento dado
                // si no encuentra el elemento, devuelve -1
                // no modifica el array

                //let animales = ['gato', 'perro', 'huron', 'perro']
                let indicePerro = animales.indexOf('perro') // [1]
                let indiceRata = animales.indexOf('rata') // [-1]
            
            //! find()

                // devuelve el primer elemento de un array que cumpla la condicion dada
                // no modifica el array

                let numeros = [1, 2, 3, 4, 5]
                // encontrar numero par
                let par = numeros.find(
                    function (numero) {
                        // devuelve numero par
                        return numero % 2 === 0; // === comprueba valor y tipo dato
                    }
                )
                console.log(par); // 2


            //! findIndex()

                // devuelve el primer indice de un elemento del array que cumpla la condicion dada
                // no modifica el array

                // let numeros = [1, 2, 3, 4, 5]
                let indicePar = numeros.findIndex(
                    function (numero) {
                        return numero % 2 === 0; 
                    }
                )
                console.log(indicePar); // [1]

            //! every()

                // comprueba si TODOS los elementos del array cumplen una condicion
                // devuelve true o false
                // no modifica el array

                let pares = [2, 4, 6, 8]
                let todosPares = pares.every(
                    function (par) {
                        return par % 2 === 0; 
                    }
                )
                console.log(todosPares); //true

            //! some()

                // comprueba si AL MENOS UN elemento del array cumple una condicion
                // devuelve true o false
                // no modifica el array

                let alMenosUno = [1, 2, 3, 4, 5]
                let unoPar = alMenosUno.some(
                    function (uno) {
                        return uno % 2 === 0; 
                    }
                )
                console.log(unoPar); // true

            //! filter()

                // devuelve los elementos que cumplen una condicion
                // crea un nuevo array

                let filtro = [1, 2, 3, 4, 5]
                let filtroPares = filtro.filter(
                    function (par) {
                        return par % 2 === 0; 
                    }
                )
                console.log(filtroPares); // [ 2, 4 ]

            //! reduce()

                // reduce el array entero a un único valor
                // no modifica el array ---> me devuelve un valor único
                    // acumulador = el indice en el que se encuentra
                    // valor actual = resultado
                // 0 = donde empieza a contar

                // arr.reduce(function(acumulador, valorActual[, índice[, array]])[, valorInicial])

                // sumar todos los elementos del array
                let valores = [1, 2, 3, 4]
                let sumaValores = valores.reduce(
                    function (acumulador, valorActual) {
                        return acumulador + valorActual
                    }, 0
                )
                console.log(sumaValores);

                //ejemplo con string
                const partesDelCoche = ["asientos", "volante", "puertas", "ruedas", "pintura metalizada"];
                const coche = partesDelCoche.reduce(
                    function (valorAnterior, valorActual) {
                        return `${valorAnterior} ${valorActual},`;
                }, "Mi coche tiene: ");
                console.log(coche); // Mi coche tiene:  asientos, volante, puertas, ruedas, pintura metalizada,

            //! from()

                // crea un array de un dato
                // modifica el array con la operacion de la función
                // por ej: hola => ['h', 'o', 'l', 'a']
                // como parámetro puedo pasar una función -> callback

                let ejArray1 = Array.from('hola') // [ 'h', 'o', 'l', 'a' ]
                console.log(ejArray1);

                let ejFuncion = Array.from('hola', el => el.toUpperCase()) // [ 'H', 'O', 'L', 'A' ]
                console.log(ejFuncion);

                let operacion = Array.from([1, 2, 3], el => el + el) // [2, 4, 6]
                console.log(operacion);

            //! map()

                // crea un array con el resultado de una instrucción a cada elemento
                // no modifica el array
                
                let mapNum = [1, 2, 3, 4, 5]
                let alCuadrado = mapNum.map(
                    function (el) {
                        return el * el
                    }
                )
                // igual con arrow function ---> let alCuadradoArrow = mapNum.map(el => el * el)
                console.log(alCuadrado); // [ 1, 4, 9, 16, 25 ]