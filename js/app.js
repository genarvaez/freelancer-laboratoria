(function Modal(){
	var box = Array.from(document.getElementsByClassName("size"));
	var modal = document.getElementById("modal-portfolio-box"); 
	box.forEach(function(e){ 
			e.addEventListener("click",function(){ 
			modal.innerHTML = "";
			var bgModal = document.createElement("div");
			bgModal.classList.add("bgModal");

			bgModal.innerHTML = e.innerHTML;

			modal.classList.remove("hide");

			// titulo del proyecto
			var title = document.createElement("h1");
			var textH1 = document.createTextNode("PROJECT TITLE");
			title.appendChild(textH1);
			modal.appendChild(title)

			// linea con estrella
			var star = document.createElement("div");
			star.setAttribute("class", "custom-star");
			var icon = document.createElement("i");
			icon.setAttribute("class", "fa fa-star fa-2x");
			star.classList.add("color");
			star.appendChild(icon);
			modal.appendChild(star)
			modal.appendChild(bgModal);	
			//descripcion del proyecto
			var project = document.createElement("p");
			var textProject = document.createTextNode("Use this area of the page to describe your project. The icon above is part of a free icon set by Flat Icons. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!")
			project.appendChild(textProject)
			modal.appendChild(project);
			// boton de cerrar
			var closeButton = document.createElement("input");
			closeButton.setAttribute("type", "button");
			closeButton.setAttribute("value", "CLOSE");
			modal.appendChild(closeButton);
			// imagen para cerrar
			var close = document.createElement("i");
			close.setAttribute("class", "fa fa-times-circle-o fa-3x");
			close.setAttribute("id", "close");
			modal.appendChild(close);
					
			 
			close.addEventListener("click", function(){
				modal.classList.add("hide");
			})
			closeButton.addEventListener("click", function(){
				modal.classList.add("hide");
			})
		})
	})
})()

var name = document.getElementById("name");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
function validation(){
	
	var sendButton = document.getElementById("send");
	sendButton.addEventListener("click", function(){
		if(name.value == "" || email.value == "" || phone.value == ""){
			alert("Can't have emty fields");
		}
		else if(!(/^\+\d{2}\d{9}$/).test(phone.value)){
			alert("Invalid phone number");
		}
		else{
		document.getElementById("name").value = "";
		document.getElementById("email").value = "";
		document.getElementById("phone").value = "";
		}
	})
}
validation()