//! ------------ ARRAY --- lista ordenada de datos ---  array dentro --- 
        
    // [0,1,2,...] --- empieza a contar por 0

        let ordenada = [0, 'hola', 12, 250, [1, 2]]
        console.log(ordenada[4][1]);
        

    //! Métodos para manejtar y modificar arrays

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