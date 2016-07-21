var inp = document.getElementById('todo-input');
var cont = document.getElementById('container-for-list');
var list = cont.childNodes;

var initialModel = ['Sample todo item'];
sessionStorage.setItem('model', JSON.stringify(initialModel));


var view = function(model){
	model.forEach(function(todo, index){
		var newItem = document.createElement('div');
		newItem.id = index;
		newItem.innerHTML = todo+"<button>X</button>";
		cont.appendChild(newItem);
	})
}


var controller  = function(storage, view){
	var model = JSON.parse(storage);

	var addToList = function(event){
		if (event.keyCode === 13) {
			var temp = inp.value;
			model.push(temp);
			sessionStorage.setItem('model', JSON.stringify(model));	
			renderView(model);
			inp.value = "";
		}
	};

	var deleteItem = function(event){
		var indexOfRemoved = this.parentNode.id;
		model.splice(indexOfRemoved, 1);
		sessionStorage.setItem('model', JSON.stringify(model));
		renderView(model);
	};

	inp.addEventListener('keyup', addToList);

	var renderView = function(model){
		clearView();
		view(model);
		list.forEach(function(todo){todo.firstChild.nextSibling.addEventListener('click', deleteItem)})

	};

	var clearView = function(){
		while(cont.firstChild){
			cont.removeChild(cont.firstChild);
		}
	}

	renderView(model); 

}

controller(sessionStorage.model, view);
