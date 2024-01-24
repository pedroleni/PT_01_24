//! map()
    // crea un array con el resultado de una instrucción a cada elemento

    // ejemlo 1

        let animals = [
            {
                name : 'gato',
                size : 'small',
            },
            {
                name : 'perro',
                size : 'small',
            },
            {
                name : 'leon',
                size : 'medium',
            },
            {
                name : 'elefante',
                size : 'big',
            },
        ]

        // declaro variable animalsName
        // aplico map() a array animals
        // creo una función callback en map(funcion) ---> se ejecuta en cada elemento del array

        /* let animalsName = animals.map(
            function names(animal) {
                return animal.name
            }
        )
        console.log(animalsName); // [ 'gato', 'perro', 'leon', 'elefante' ] */

        // arrow

        let animalsArrow = animals.map(animal => animal.name)
        console.log(animalsArrow); // [ 'gato', 'perro', 'leon', 'elefante' ]


    // ejemlo 2 ---> las tres primeras letras de los dias

        let dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
        
        let diasMayus = dias.map(dia => dia.toUpperCase()) // dias en mayúscula
        let diasCortos = dias.map(dia => dia.substring(0,3).toUpperCase()) // lun, mar, mier, jue, vie, sab, dom
        console.log(diasCortos);

    // ejemplo 3 ---> calcular cuadrado de los números pares y si no son pares que se queden como estan

        let numeros = [2, 15, 4, 5, 6, 8, 10];

        let cuadradoPares = numeros.map(num => {
            if (num % 2 == 0){
                return num * num
            } else {
                return num
            }
        })
        console.log(cuadradoPares); //4, 15, 16, 5, 36, 64, 100


//! filter()
    // devuelve los elementos que cumplen una condición

    // ejemplo 1

        let numeros2 = [2, 15, 4, 5, 6, 8, 10];
        let pares = numeros2.filter(num => num % 2 == 0) // [ 2, 4, 6, 8, 10 ]

        let numerosYletras = [2, 'hola', 4, 'que tal', 6, 8, 10, true];
        let cadenas = numerosYletras.filter(el => typeof el === 'string') // [ 'hola', 'que tal' ]

    // ejemplo 2 ---> personas a partir de 30

        let personas = [
            { nombre : 'pedro', edad : 15 },
            { nombre : 'ana', edad : 35 },
            { nombre : 'luis', edad : 60 },
            { nombre : 'eva', edad : 30 },
        ]

        let mayores = personas.filter(el => el.edad >= 30) 
        console.log(mayores);

    // ejemplo 3 ---> palabras que incluyan la letra o

        let palabras = ['perro', 'silla', 'sarten', 'caballo'];

        let letraO = palabras.filter(el => el.includes('o'))
        console.log(letraO);

    // ejemlo 4 ---> los que tengan la edad apuntada

        let personas2 = [
            { nombre : 'pedro', edad : 15 },
            { nombre : 'ana', edad : 35 },
            { nombre : 'luis'},
            { nombre : 'eva', edad : 30 },
        ]

        let conEdad = personas2.filter(el => el.hasOwnProperty('edad'))
        console.log(conEdad);

//! filter() & map()

        let productos = [
            {
                producto : 'silla',
                precio : 30,
                color : 'marron'
            },
            {
                producto : 'sofa',
                precio : 700,
                color : 'gris'
            },
            {
                producto : 'mesa',
                precio : 100,
                color : 'marron'
            },
        ]

        // producto que me puedo permitir con 150€

        let productoHasta = productos.filter(el => el.precio <= 150) // [{ producto: 'silla', precio: 30, color: 'marron' }, { producto: 'mesa', precio: 100, color: 'marron' }]
        console.log(productoHasta);

        let nombreProducto = productos.filter(el => el.precio <= 150).map(el => el.producto) // silla, mesa
        // toma el array productos
        // se aplica un filtro de precio <= 150
        // devuelve el array con ese filtro ---> [{ producto: 'silla', precio: 30, color: 'marron' }, { producto: 'mesa', precio: 100, color: 'marron' }]
        // mapea y devuelve la propiedad producto de cada objeto ---> ['silla', 'mesa']
        console.log(nombreProducto);
