//Definimos reducer de contactos como una 
//arrow function que recibe solo dos parametros
//que son: un estado inicial y una accion

//enf
 
//el reducer es una funcion pura que recibe un estado inicial
//y una accion y devuelve un nuevo estado
//el estado inicial es un objeto vacio
//la accion es un objeto que tiene un tipo y un payload
//el tipo es un string que indica que tipo de accion se esta ejecutando
//el payload es un objeto que contiene los datos que se van a modificar
//en el estado


export const ContactosReducer = (state , action) => {
    switch (action.type) {
        case "add":
            //se una copia del state y se agrega lo que se tiene en el payload
            //el operador spread es para copiar el state y no modificarlo
            return [...state, action.payload]; //payload es el objeto que contiene los datos del contacto y es un objeto con los nuevos datos
        case "delete":

            //se crea una copia del state y se filtra para que no se incluya el contacto que se quiere eliminar
            return state.filter((actual=>actual.id!==action.payload)); //payload es el objeto que contiene los datos del contacto y es un objeto con los nuevos datos
        
        
    }

}
