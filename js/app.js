(function Modal(){
	var box = Array.from(document.getElementsByClassName("size")); //importo mis elementos a mostrar en el modal
	var modal = document.getElementById("modal-portfolio-box"); //importo el espacio donde irá en el html, el modal
	box.forEach(function(e){ //inicio un recorrido a mi arreglo de elementos
		e.addEventListener("click",function(){ //agrego un evento para cada uno de mis elementos
			modal.innerHTML = "";
			var bgModal = document.createElement("div"); //creo mi BG del modal
			bgModal.classList.add("bgModal"); //le añado su clase correspondiente
			bgModal.innerHTML = e.innerHTML; //le asigno lo que va a imprimir
			modal.appendChild(bgModal);	 // le asigno como padre su respectivo espacio
			modal.classList.remove("hide"); // la clase que me permite esconder y mostrar
			var close = document.createElement("img"); // creo mi elemento de cierre
			close.setAttribute("src", "http://tojaeurope.com/gallery/Close-icon.png"); //le coloco los atributos correspondientes 
			close.setAttribute("id", "close");
			bgModal.appendChild(close);
			close.addEventListener("click", function(){
				modal.classList.add("hide");
			})
		})
	})
})()