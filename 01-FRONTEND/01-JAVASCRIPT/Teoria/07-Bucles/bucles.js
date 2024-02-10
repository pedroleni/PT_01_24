//! ------------ BUCLES / LOOP -----> instrucción que se repite si se cumple una condición

// se repite el bucle mientras siga siendo true
//ejemplos contar hasta 10

    //!for

        /* keyword (inicializacion; condicion; expresion) {
            instruccion
        }  */ 

        for (let i = 0; i <= 10; i++) {
            //instrucción
            console.log(i);
        }

        // inicialización ---> let i = 0 ---> donde inicia el registro
        // condición ---> i <= 10 ---> ejecuta el código hasta 10 veces
        // iterador ---> indica cómo continuar ---> de uno en uno

        //ejemplo numero mala suerte

            let numberList = [1,2,3,4,7,8,10,13];

            for (let i = 0; i < numberList.length; i++) {
                if(numberList[i] === 13) {
                    console.log('Dicen que da mala suerte 👹')
                }
            }



    //! while ---> comprueba una condición ---> si es true sigue ejecutando el código ---> mientras sea true ejecuta el código hasta que sea false

        /* let numero = 0;

        while (numero <= 10) {
            numero++;
            console.log(numero);
        } */


    //!do while ---> ejecuta la acción al menos una vez

    let variable = false;

    do {
        console.log("vale, lo hago una vez");
    } while (false);


    //! forEach

        // bucle for pero más funcional
        // ejecuta una función en cada vuelta al bucle

        let coches = ['mercedes', 'toyota', 'mini', 'fiat']

        coches.forEach(
            function (el) {
                console.log(el);
            }
        )

        // arrow function
        
        coches.forEach(el => console.log(el))

        // o en una variable y forEach a la función

        let listaCoches = (el) => console.log(el);
        coches.forEach(listaCoches)


        // otro ejemplo con alumnos

            let alumnos = ['david', 'laura', 'elena', 'fran']

            // david
            // laura
            // elena
            // fran

            alumnos.forEach(
                function (alumno) {
                    console.log(alumno);
                }
            );

            // arrow function

            alumnos.forEach(alumno => console.log(alumno))

            // o en una variable y forEach a la función

            let listaAlumnos = alumno => console.log(alumno);
            alumnos.forEach(listaAlumnos)
    
    //! for ... of
        
        // sintaxis

            /* for (let iterator of object) {
                
            } */

            // iterator = parametro dentro del bucle
            // object = objeto sobre el que hacemos el bucle

        // sumar 1 a cada elemento del array ---> 11, 21, 31, 41
        let arrayForOf = [8, 10, 20, 30, 40]

        // sumar 1 a todos
        
        for (let numero of arrayForOf) {
            numero += 1;
            console.log(numero); // 11, 21, 31, 41
        }

        // solo sobre 10

        for (let numero of arrayForOf) {
            if (numero === 10) {
                numero += 1;
                console.log(numero); // 11
            }
        }

    //! for ... in

        // recorre las propiedades de un objeto
            // key : value
            // propiedad : valor

            // sintaxis

                /* for (let propiedad in objeto) {
                
                } */
        
        let personaje = {
            nombre : 'Lisa', 
            apellido : 'Simpson', 
            ciudad : 'Sprinfield',
            instrumento : 'Saxofón'
        }

        // Este personaje tiene de NOMBRE LISA SIMPSON
        for (let x in personaje) {
            console.log('Este personaje tiene de ' + x + ' ' + personaje[x]);
        }

            // x sería la propiedad
            // personaje[x] sería el valor

            /* Este personaje tiene de nombre Lisa
            Este personaje tiene de apellido Simpson
            Este personaje tiene de ciudad Sprinfield
            Este personaje tiene de instrumento Saxofón */

        // buena práctica sobre array

            // recorre cada indice del array
            // la propiedad/key sería el índice/[0]
            // el valor/value sería el elemento/perro

        let animales = ['perro', 'gato', 'caballo', 'oruga']

        for (const animal in animales) {
            console.log(animal); // indice
            console.log(animales[animal]); // perro, ...
        }

    //------>  ejercicios <------//

    