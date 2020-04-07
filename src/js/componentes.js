import { Todo } from "../classes";
import { todoList } from "../index";


// referencias en el HTML
const divTodoList = document.querySelector('.todo-list');
// constante para manejar la referencia al input de mi html
const txtInput = document.querySelector('.new-todo');
// referencia 
const btnBorrar = document.querySelector('.clear-completed');
// referencia 
const ulFiltros = document.querySelector('.filters');
// referencia
const anchorFiltros = document.querySelectorAll('.filtro');


// metodo para que construya (pinte) la lista en HTML

export const crearTodoHtml = (todo) => {

    const htmlTodo = `
<li class="${ (todo.completado) ? 'completed' : ''}" data-id="${todo.id}">
						<div class="view">
							<input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked' : ''}>
							<label>${ todo.tarea}</label>
							<button class="destroy"></button>
						</div>
						<input class="edit" value="Create a TodoMVC template">
					</li>
`;


    // creando un div e insertando registro.
    const div = document.createElement('div');
    div.innerHTML = htmlTodo;
    // extraer del div solo retornar el <li> e insertarlo en el <ul> 
    divTodoList.append(div.firstElementChild);
    return div.firstElementChild;

}


// [Eventos] 
//para saber que tecla preciono en el input 
txtInput.addEventListener('keyup', (event) => {
    // cuando precione enter , agregar 
    if (event.keyCode === 13 && txtInput.value.length > 0) {

        console.log(txtInput.value);
        // instanciamos la clase Todo y le mandamos lo que tecleamos en el input, aqui el constructor de la clase
        // lo recibe y le da un Id , un estatus de completado a falso, un date(). 
        const nuevoTodo = new Todo(txtInput.value);
        // la clase todoList , tiene un metodo que se encarga de guardar el regitro en un array
        todoList.nuevoTodo(nuevoTodo);

        console.log(todoList);
        //esta es una funcion que se encarga de darle formato html e insertarlo en la lista
        crearTodoHtml(nuevoTodo);
        // limpiar la caja de texto
        txtInput.value = '';
    }

});

// [Evento]

divTodoList.addEventListener('click', (event) => {
    // me indica a que elemento estoy haciendo clic
    const nombreElemento = event.target.localName;
    // me obtiene <li>
    const todoElemento = event.target.parentElement.parentElement;
    // extraer el id
    const todoId = todoElemento.getAttribute('data-id');

    // marcar el check- click en el check
    if (nombreElemento.includes('input')) {
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');
        // si preciono el boton de la [x]
    } else if (nombreElemento.includes('button')) {
        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElemento);
    }



});


btnBorrar.addEventListener('click', () => {

    todoList.eliminarCompletados();

    //eliminar de abajo hacia arriba

    for (let i = divTodoList.children.length - 1; i >= 0; i--) {

        const elemento = divTodoList.children[i];

        if (elemento.classList.contains('completed')) {
            divTodoList.removeChild(elemento);
        }

    }

});



ulFiltros.addEventListener('click', (event) => {

    const filtro = event.target.text;
    if (!filtro) { return; }

    // <a> los botones de filtro
    anchorFiltros.forEach(elem => elem.classList.remove('selected') );
    event.target.classList.add('selected');

    for (const elemento of divTodoList.children) {

        // primero limpio o remuevo el hidden
        elemento.classList.remove('hidden');

        const completado = elemento.classList.contains('completed');


        switch (filtro) {

            case 'Pendientes':
                if (completado) {
                    elemento.classList.add('hidden');
                }
                break;

            case 'Completados':
                if (!completado) {
                    elemento.classList.add('hidden');
                }
                break;



        }




    }



});