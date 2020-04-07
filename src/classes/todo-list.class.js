// Agrupar toda la lisa 

import { Todo } from "./todo.class";

export class TodoList {

    constructor() {

        //this.todos = [];
        this.cargarLocalStorage();

    }

    // metodos para agregar la tarea a la lista
    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardarLocalSrorage();
    }

    //metodo para eliminar la tarea
    eliminarTodo(id) {
        // .filter borra en una arreglo
        // la instruccion regresa un nuevo arreglo
        this.todos = this.todos.filter(todo => todo.id != id);
        this.guardarLocalSrorage();
    }

    //metodo para marcar completado, aqui llega el string del id
    marcarCompletado(id) {

        // mi tarea (id) of arreglo[]
        for (const todo of this.todos) {

            console.log(id, todo.id);

            if (todo.id == id) {

                todo.completado = !todo.completado;
                this.guardarLocalSrorage();
                break;
            }


        }

    }

    //borrar todos los completados
    eliminarCompletados() {

        // .filter borra en una arreglo
        // la instruccion regresa un nuevo arreglo
        this.todos = this.todos.filter(todo => !todo.completado);
        this.guardarLocalSrorage();

    }

    /*
    ---------------------------------------------------------------------------------
    LOCAL STORAGE:
    ---------------------------------------------------------------------------------
    */



    guardarLocalSrorage() {
        // los local storage solo aceptan (una llave en "string" en este caso "todo" (esa es nuestra llave) 
        //y el cuerpo tambien en "string" en este caso: JSON.parse(localStorage.getItem('todo')) -- (lo parseamos para que fuera tipo JSON)
        // asi que transformamos nuesto objeto en un JSON. con la instruccion stringify
        localStorage.setItem('todo', JSON.stringify(this.todos));


    }


    cargarLocalStorage() {
        // la condicion la simplificamos a un operador ternario. en donde le decimos que si el localstorage tiene algo, entonces:
        // lo tomamos del localstorage y si no entonces regresamos el array vacio [];
        // aplicamos el parse del JSON para regresarlo a un array []

        this.todos = (localStorage.getItem('todo'))
            ? JSON.parse(localStorage.getItem('todo'))
            : [];

        // existe un metodo en todos los arreglos [map] : me permite barrer cada uno de los elementos que estan dentro de un arreglo
        // y retornar un nuevo arreglo con cada uno de sus objetos mutados. https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map
        this.todos = this.todos.map(obj => Todo.fromJson(obj));

    }






}