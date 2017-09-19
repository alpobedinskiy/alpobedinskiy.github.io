document.body.onmousedown = function(event) {
  var target = event.target;
    if (target.tagName != 'BUTTON') return; // Если нажали не на кнопку, то ничего не происходит

    target.style.borderBottomWidth = 1 + 'px'; // Например, поменяем размер нижней границы
    document.body.onmouseup = function() {
    target.style.borderBottomWidth = 3 + 'px'
    }
};

var adult = document.querySelector(".adult");
 	   adult.children[2].onclick = function() {
		  if (this.classList.contains("active")) return;
		  	this.className = "active"; 
			adult.children[1].className = ""
		}
adult.children[1].onclick = function() {
		  if (this.classList.contains("active")) return;
		  	this.className = "active"; 
			adult.children[2].className = ""
		}  		
  