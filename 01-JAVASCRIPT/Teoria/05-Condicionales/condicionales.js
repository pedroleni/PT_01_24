//! ------------ CONDICIONALES

    //! --- sintaxis de una condición

        /* keyword (condicion){
            codigo de la tarea
        } */

    // if ---> si se cumple una condición, realiza la tarea

        if (10 > 1) {
            console.log("tarea completada!");
        }

    // if ---> single line ---> solo si la tarea tiene una línea

        if (5 > 0) console.log("si");

    // if ... else

        // si la condición se cumple se realiza la tarea
        // si la condición no se cumple, se ejecuta otra tarea

        let numero = 100; // true
        let impar = 5; // false

        if (numero % 2 == 0) {
            console.log("Par");
        } else {
            console.log("Impar");
        }


    // if ... else if ... else ---> para multicondición

        let edad = 20;

        if (edad == 18){
            console.log("puedes conducir");
        } else if (edad < 18){
            console.log("no puedes conducir");
        } else {
            console.log("tienes carnet de conducir?");
        }


    // switch ---> alternativa if else ---> si la condición es verificada se ejecuta el código y deja de ejecutar el resto del código

        let color = "azul";

        switch (color) {
            case "rojo":
                console.log("este no es el color que buscas");
                break;

            case "verde":
                console.log("este no es el color que buscas");
                break;

            case "azul":
                console.log("este si!!"); //lo encuentra y lo ejecuta
                break;
        
            default:
                console.log("no ha habido suerte :(");
                break;
        }


    // try ... catch ---> intenta el código dentro de try y si no lo consigue ejecuta catch

        try {
            console.log(variable);
        } catch {
            console.log("esta variable no está declarada");
        }


    // operador ternario o condicional ---> alternativa if else ---> más legible y más corto ---> una línea

        // condicion ? expresion1 : expresion2
            // true ---> expresion1
            // false ---> expresion2

            let nota = 3;
            console.log(`Mi nota es un ${nota}`);

            let calificacion = nota >= 5 ? "aprobado" : "suspenso"
            console.log(`Estoy ${calificacion}`);



//! --- EJERCICIO ---> crear un programa que dadas dos variables boolean nos digas si puedo ir a la playa.
        // Si trabajo no puedo ir
        // Si no trabajo ---> verifico si hace buen tiempo
        // En los casos negativos lanzar un mensaje adecuado

        let buenTiempo = false;
        let trabajo = false;