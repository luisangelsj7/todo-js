// Parte del Cascaron
//import { saludar } from './js/componentes.js';
import './styles.css';

//importaciones de todas mis clases , por defecto siempre busca el index.js
import {Todo,TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';


// instanciar de la clase TodoList
export const todoList = new TodoList();

// pintarlos en el HTML todas las listas
todoList.todos.forEach(todo => crearTodoHtml(todo) );

// Crear una istancia a harcodeada y agregarla a la lista:
// console.log('todos',todoList.todos);
// const newTodo = new Todo ('Aprender JavaScript');
// todoList.nuevoTodo(newTodo);

/*
-- arreglo de objetos, no es un arreglo de instancias
[{…}, {…}, {…}] 

0: {tarea: "1", id: 1586203482767, completado: false, creado: "2020-04-06T20:04:42.767Z"}
1: {tarea: "2", id: 1586203483420, completado: false, creado: "2020-04-06T20:04:43.420Z"}
2: {tarea: "3", id: 1586203484068, completado: false, creado: "2020-04-06T20:04:44.068Z"}
3: {tarea: "Aprender JavaScript", id: 1586204289664, completado: false, creado: "2020-04-06T20:18:09.664Z"}
-- esta ejemplo si es una instancia:
4: Todo {tarea: "Aprender JavaScript", id: 1586204324650, completado: false, creado: Mon Apr 06 2020 15:18:44 GMT-0500

*/