
var inp = document.getElementById('todo-input');
var cont = document.getElementById('container-for-list');
var list = cont.childNodes;

//==--------------------------------------------------MODEL-----------------------------------------------------------------------

var initialModel = [];
if (!sessionStorage.model) sessionStorage.setItem('model', JSON.stringify(initialModel)); //creates new model in storage if one doesn't exist
var model = JSON.parse(sessionStorage.model);

//==--------------------------------------------------VIEW------------------------------------------------------------------------

var view = function(model){
	model.forEach(function(todo, index){
		var newItem = document.createElement('div');
		newItem.id = index;
		newItem.classList.add('normal-todo');
		newItem.innerHTML = "<p class='todo-text'>"+todo+"</p><button class='todo-button'>X</button>";
		cont.appendChild(newItem);
	})
}

//==-------------------------------------------------CONTROLLER------------------------------------------------------------------

var controller  = function(model, view){

	var addToList = function(event){
		if (event.keyCode === 13) {
			var temp = inp.value;
			model.unshift(temp);
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

controller(model, view);
