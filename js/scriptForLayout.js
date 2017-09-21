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
};
adult.children[1].onclick = function() {
		  if (this.classList.contains("active")) return;
		  	this.className = "active"; 
			adult.children[2].className = ""
};  		

var flex = document.querySelector(".flex-container");
    this.onmouseover = function(e) {
		var target = e.target;
		   
		if (target.tagName != 'IMG') return;
		
		var span = document.createElement("span");
		var p = document.createElement("p");
				
		span.innerHTML = target.getAttribute("title");
		p.innerHTML = target.getAttribute("alt");	
		
		target.after(p);    
		target.after(span);        
		 					
		this.onmouseout =  function() {
			p.className = "hover-out";
			span.className = "hover-out";
           			
			setInterval( function(){
			p.remove();
            span.remove();
            } , 400);			
        }	
	}
 
  
  