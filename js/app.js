var temp;

var deleteItem = function(event){
	this.parentNode.removeChild(this);
};

var addToList = function(event){
	if (event.keyCode === 13) {
		temp = inp.value;
		inp.value='';
		var newItem = document.createElement('div');
		newItem.addEventListener('click', deleteItem);
		newItem.innerHTML = temp+"<button>X</button>";
		cont.appendChild(newItem);
	}
};


var inp = document.getElementById('todo-input');
var list = document.getElementById('todo-list');
var cont = document.getElementById('container-for-list');
inp.addEventListener('keyup', addToList,  false);

