(function(){
	var lista=document.getElementById("Lista");
	var tareaInput=document.getElementById("Input-Tarea");
	var btnNuevaTarea=document.getElementById("Btn-Agregar");

	//funciones
	var agregarTarea=function(){
		var tarea=tareaInput.value;
		var nuevaTarea=document.createElement("li","div", "checkbox");
		var enlace=document.createElement("a");
		var contenido= document.createTextNode(tarea);
		
		if (tarea === "") {
			tareaInput.setAttribute("placeholder","Agrega una tarea");
			tareaInput.className = "error";
			return false;
		}
		//crea li
		enlace.appendChild(contenido);
		//crea a
		enlace.setAttribute("href", "#");
		//crea contenido de a
		nuevaTarea.appendChild(enlace);
		//antes del resultado de  input
		enlace.insertAdjacentHTML('Beforebegin','<label><input type="checkbox" value=""></label>');
		//despues del resultado de input
		enlace.insertAdjacentHTML('afterend','<i class="fa fa-trash fa-1x" aria-hidden="true"></i>');
		//agregar a lista
		lista.appendChild(nuevaTarea);

		for (var i = 0; i <= lista.children.length -1; i++) {
            lista.children[i].addEventListener("click", function(){
                this.parentNode.removeChild(this);
            });
        }
	};
	//Regresar el input del error
	var comprobarInput=function(){
		tarea.className= "";
        tarea.setAttribute("placeholder", "Añade tu nueva tarea");
	};
	var eliminarTarea=function(){
		 this.parentNode.removeChild(this);
	};

	//Eventos
	//Agregar tarea
	btnNuevaTarea.addEventListener("click", agregarTarea);

	//comprobar tarea
	tareaInput.addEventListener("click", comprobarInput);

	for (var i = 0; i <= Lista.children.length-1; i++) {
		Lista.children[i].addEventListener("click", eliminarTarea);
	}

}());