//! FUNCIONES

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


    //! arrow function

                let uno = 5;
                let dos = 2;
                area2 = (base, altura) => `el area del rectangulo es ${base * altura}`
                console.log(area2(uno, dos));