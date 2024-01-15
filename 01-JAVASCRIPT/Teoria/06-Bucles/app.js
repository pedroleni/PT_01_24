//! ------------ BUCLES / LOOP -----> instrucción que se repite si se cumple una condición
// se repite el bucle mientras siga siendo true
//ejemplos contar hasta 10

    //for

        /* keyword (inicializacion; condicion; expresion) {
            instruccion
        }  */ 

        for (let i = 0; i <= 10; i++) {
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



    // while ---> comprueba una condición ---> si es true sigue ejecutando el código ---> mientras sea true ejecuta el código hasta que sea false

        /* let numero = 0;

        while (numero <= 10) {
            numero++;
            console.log(numero);
        } */


    //do while ---> ejecuta la acción al menos una vez

    let variable = false;

    do {
        console.log("vale, lo hago una vez");
    } while (false);