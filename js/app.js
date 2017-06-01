(function Modal(){
	var box = Array.from(document.getElementsByClassName("size"));
	var modal = document.getElementById("modal-portfolio-box"); 
	box.forEach(function(e){ 
			e.addEventListener("click",function(){ 
			modal.innerHTML = "";
			var bgModal = document.createElement("div"); 
			bgModal.classList.add("bgModal");
			bgModal.innerHTML = e.innerHTML; 
			var closeButton = document.createElement("input");
			closeButton.setAttribute("type", "button");
			closeButton.setAttribute("value", "CLOSE");
			modal.appendChild(bgModal);	 
			modal.classList.remove("hide"); 
			var close = document.createElement("img");
			close.setAttribute("src", "http://tojaeurope.com/gallery/Close-icon.png");		close.setAttribute("id", "close");
			modal.appendChild(close);
			close.addEventListener("click", function(){
				modal.classList.add("hide");
			})
		})
	})
})()