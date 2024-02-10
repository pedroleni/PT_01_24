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

        // parametros se separan por coma
        // los parametros solo viven en la función

        saluda('Bea', 'desarrolladora web') //lamada a la funcion con string
        saluda('Angel', "fisio")
        /* saluda(user.name, user.work) //lamada a la funcion con propiedad de objeto
        saluda(desordenada.nombre, desordenada.apellido) */

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


    //! arrow function ---> no necesitamos {} ni return

                let a = 5;
                let b = 2;
                calcularArea = (el1, el2) => `el area del rectangulo es ${el1 * el2}`
                console.log(calcularArea(10, 5)); // el area del rectangulo es 50
                console.log(calcularArea(a, b)); // el area del rectangulo es 10


    //! tipos de parametro

            // parámetro opcional ---> opcional='alumno'
            // parámetro formal ---> persona
            // parámetro actual ---> Sebas, ebanista
            
                function par1(persona, opcional="alumno") {
                    return `${persona} es un ${opcional}`
                }
                console.log(par1('Sebas')); // Sebas es un alumno
                console.log(par1('Sebas', 'ebanista')); // Sebas es un ebanista

    
    //! ejercicio calidad y propinas ---> funcion + if ... else if ... else 

        // crear una función
        // dos parámetros -> calidad, coste

        // comprobamos la calidad
        // calculamos el coste
        
        // fatal ---> 5% de propina
        // ok ---> 10% de propina
        // bueno ---> 20% de propina
        // excelente ---> 30% de propina
        // para cualquier otra calidad ---> 25% de propina

        function calcularPropina(calidad, coste) {
            if (calidad == 'fatal') {
                return coste * 0.05;
            } else if (calidad == 'ok'){
                return coste * 0.10;
            } else if (calidad == 'bueno'){
                return coste * 0.20;
            } else if (calidad == 'excelente'){
                return coste * 0.30;
            } else {
                return coste * 0.25;
            }
        }
        console.log(calcularPropina('fatal', 10)); // 0.5 €
        console.log(calcularPropina('excelente', 10)); // 3 €
        console.log(calcularPropina('eaa', 10)); // 2.5 €


        