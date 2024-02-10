//! ------------ OBJETO --- lista desordenada de datos --- parejas de datos

        // {llave : valor,}
        // {key : value,}
        // {propiedad : valor,}

        // funcion - funcion suelta en el código
        // método - función dentro de un objeto, accedemos con la propiedad ---> propiedad()

        // this.propiedad ---> buscamos una propiedad dentro del objeto ---> para funciones dentro del objeto = métodos

        let desordenada = {
            nombre : "Bea",
            apellido : "Serrano",
            edad : 33,
            pausaCafe : function (tiempo, lugar) {
                console.log(`${this.nombre} ${this.apellido} ve a ${lugar} es tu descanso de ${tiempo} minutos`);
            },
            hobbies : ['perros', 'codigo']
        }
        console.log(desordenada.pausaCafe(15, 'la terraza')); // descanso!
        console.log(desordenada.nombre); // Bea
        console.log(desordenada.hobbies[0]); // perros
    
        // otro ejemplo

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
        console.log(user.fight('mazo'));

        //! crear objeto manual

            let avenger = {
                name : 'Ironman',
                power : 70
            }
    
        //! new Object()

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

        
        //! this ---> funciones constructoras

            // definir tipo de objeto con una función
            // crear instancia del objeto con new Nombre
            // darle datos a la función

            function Casa(ciudad, metros, planta) {
                this.ciudad = ciudad; // Badajoz
                this.metros = metros; // 80
                this.planta = planta; // 2
            }
            let miCasa = new Casa('Badajoz', 80, 2)
            console.log(miCasa);
                /* Casa { 
                    ciudad: 'Badajoz', 
                    metros: 80, 
                    planta: 2 
                } */

        //! for ... in

            // for controla si en SUPERHEROE hay propiedad : valor
            // con for, la const key está en superheroe y rellene el objeto

                let nombre = 'Batman';
                let ciudad = 'Gotham';
                let transporte = 'Batmovil';

                let superheroe = {
                    nombre,
                    ciudad,
                    transporte,
                }

                for (const key in superheroe) {
                    // instrucción
                    superheroe[key]
                }
                console.log(superheroe);

        //! comparar objetos ---> true o false
            
            // dos objetos nunca son iguales aunque tengan mismo propiedad y valor

            let peces = {nombre : 'banco'}
            let dinero = {nombre : 'banco'}
            console.log(peces == dinero); // false - compara el objeto
            console.log(peces === dinero); // false - compara el objeto
            console.log(peces.nombre == dinero.nombre); // true - compara el valor
            console.log(peces.nombre === dinero.nombre); // true - compara el valor

            let peces2 = {nombre : 'banco'}
            let dinero2 = peces2;
            console.log(peces2 == dinero2); // true
            console.log(peces2 === dinero2); // true

        //! Object.keys(objeto)

            // crea un array con las propiedades/llaves/keys del objeto

            let empresa = {
                nombre : "Bea",
                apellido : "Serrano",
                edad : 33,
                pausaCafe : function (tiempo, lugar) {
                    console.log(`${this.nombre} ${this.apellido} ve a ${lugar} es tu descanso de ${tiempo} minutos`);
                },
                hobbies : ['perros', 'codigo']
            }

            console.log(empresa); // imprime el objeto entero
            console.log(Object.keys(empresa)); // [ 'nombre', 'apellido', 'edad', 'pausaCafe', 'hobbies' ]
        
        //! Object.values(objeto)

            // crea un array con los valores/values del objeto
        
            // partimos de objeto empresa
            console.log(Object.values(empresa)); // [ 'Bea', 'Serrano', 33, [Function: pausaCafe], [ 'perros', 'codigo' ] ]

        //! Object.entries(objeto)

            // crea un array con propiedades y valores en pareja
        
            // partimos de objeto empresa
            console.log(Object.entries(empresa));
            /* [
                [ 'nombre', 'Bea' ],
                [ 'apellido', 'Serrano' ],
                [ 'edad', 33 ],
                [ 'pausaCafe', [Function: pausaCafe] ],
                [ 'hobbies', [ 'perros', 'codigo' ] ]
            ] */

        //! Object.fromEntries(array)

            // inverso de Object.entries()
            // crea un objeto a partir de un array

            let arrayEmpresa = [
                [ 'nombre', 'Bea' ],
                [ 'apellido', 'Serrano' ],
                [ 'edad', 33 ],
                [ 'hobbies', [ 'perros', 'codigo' ] ]
            ]
            console.log(Object.fromEntries(arrayEmpresa));
            /* {
                nombre: 'Bea',
                apellido: 'Serrano',
                edad: 33,
                hobbies: [ 'perros', 'codigo' ]
            } */

        //! map() ---> teoría en arrays

            // array con objetos 

            let animales = [
                {
                    nombre : 'gato',
                    talla : 'peque',
                },
                {
                    nombre : 'perro',
                    talla : 'mediano',
                },
                {
                    nombre : 'leon',
                    talla : 'grande',
                },
                {
                    nombre : 'elefante',
                    talla : 'gigante',
                }
            ]

            // operacion con map

            let nombreAnimales = animales.map(
                function (animal) {
                    return `El ${animal.nombre} es de talla ${animal.talla}`
                }
            )
            /* [
                'El gato es de talla peque',
                'El perro es de talla mediano',
                'El leon es de talla grande',
                'El elefante es de talla gigante'
            ] */

            // versión arrow function ---> let nombreAnimales2 = animales.map(animal => animal.nombre)
            // [ 'gato', 'perro', 'leon', 'elefante' ]

