        // 1. Instrucciones
        let lista = document.getElementById("lista");
        let item = document.getElementsByClassName('item');
        for (let i = 0; i <= item.length; i++) {
            console.log(item[i]);
        }
        
        // 2. Crear tarea
        let nuevaTarea = document.createElement("li");
        nuevaTarea.textContent = "tarea creada dinámicamente";
        nuevaTarea.className = "item";
        lista.appendChild(nuevaTarea);
        
        // 3. Borrar última tarea
        let tareasActuales = document.getElementsByClassName("item");
        if (tareasActuales.length === 0) {
            console.log("No hay tareas para eliminar");
        } else {
            let ultimaTarea = tareasActuales[tareasActuales.length - 1];
            ultimaTarea.remove();
        }
        
        // Extra: Event listeners
        document.getElementById("btn-agregar").addEventListener("click", function() {
            let lista = document.getElementById("lista");
            let nuevaTarea = document.createElement("li");
            nuevaTarea.textContent = "tarea creada dinámicamente";
            nuevaTarea.className = "item";
            lista.appendChild(nuevaTarea);
        });
        
        document.getElementById("btn-borrar").addEventListener("click", function() {
            let tareas = document.getElementsByClassName("item");
            if (tareas.length === 0) {
                console.log("No hay tareas para eliminar");
            } else {
                let ultimaTarea = tareas[tareas.length - 1];
                ultimaTarea.remove();
            }
        });