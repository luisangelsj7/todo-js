

export class Todo {

// que al almacenarlo en mi local storage y convertir a JASON , pierde todos mis metodos , ya que el local storage no gurda metodos , solo
// propiedades , entonces vamos a resolverlo de la siguiente manera.
// esto me permite recuperar los metodos que yo cree en esta clase.

static fromJson({id, tarea, completado, creado}){

const tempTodo = new Todo(tarea);

tempTodo.id = id;
tempTodo.completado = completado;
tempTodo.creado = creado;

return tempTodo


}


// constructor
    constructor(tarea) {

        // tarea que recibo.
        this.tarea = tarea;
        
        // Manera de crear un Id
        this.id = new Date().getTime();
        // el que me indica si la tarea esta completada o no
        this.completado = false;
        // la fecha de creacion
        this.creado = new Date();

    }


    // metodo de imprimir
imprimirClase(){
    console.log(`${this.tarea} - ${this.id}`);
}

}