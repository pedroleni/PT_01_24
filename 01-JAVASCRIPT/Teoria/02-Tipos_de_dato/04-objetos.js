//! ------------ OBJETO --- lista desordenada de datos --- parejas de datos

        // {llave : valor,}
        // {key : value,}
        // {propiedad : valor,}

        let desordenada = {
            "nombre" : "Bea",
            "apellido" : "Serrano",
            "edad" : 33,
            pausaCafe : function () {
                console.log("descanso!");
            },
            hobbies : ['perros', 'codigo']
        }
        console.log(desordenada.nombre);
        console.log(desordenada.pausaCafe());
        console.log(desordenada.hobbies[0]);
    
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
        console.log(user.fight('espada laser'));
    
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