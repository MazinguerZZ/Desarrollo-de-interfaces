        //Vamos a declarar automáticamente la variable "marcaCoche" y le asignamos el valor "MG"
        marcaCoche = "MG";

        //iniciamos una sentencia IF
        if (marcaCoche == "MG") {
            /* Declaramos dos variables en su bloque de codigo: 
                Una con 'var' que podremos usar FUERA DEL IF
                y otra con 'let' que solo podremos usar DENTRO DEL IF*/
            var modeloCoche = "ZS";

            // Otra con "let" que NO podemos utilizar fuera del codigo del "if"
            let versionCoche = "luxury";

            // Mostramos por consola sus valores DENTRO del IF
            console.log("Dentro del IF");
            console.log("Marca", marcaCoche);
            console.log("Modelo", modeloCoche);
            console.log("Version", versionCoche);
        }

        try {
        /*Al intentar mostrar por consola el valor de la variable "versionCoche"
          FUERA del IF indica que esta no tiene valor asignado ("undefined") ya que
          no "ve" la variable declarada del "let" a la que asignamos un valor*/

        console.log("Dentro del IF");
        console.log("Marca", marcaCoche);
        console.log("Modelo", modeloCoche);
        console.log("Version", versionCoche);
        console.log("El " + marcaCoche + modeloCoche + "tiene varias versiones," +
            " pero no puedo ver cuál seleccionaste " + versionCoche);

        /*Manejamos el error para que el ejemplo no falle usando la estructura
        TRY - CATCH */
        

            console.log("Version", versionCoche)
        } catch (error) {
            console.log("Version del coche no definida." + 
                " No se puede acceder a la variable versionCoche" + 
                " porque existe sólo dentro del IF")
        }