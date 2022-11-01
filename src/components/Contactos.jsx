import React, { useReducer, useEffect, useState } from 'react'
import { ContactosReducer } from '../reducer/ContactosReducer'
import FormularioAdd from './FormularioAdd'
import TablaContactos from './TablaContactos'

//defiimos el local storage
const init = () => {
    //definimos el local storage
    const contactos = localStorage.getItem('contactos');
    //si existe el local storage lo retornamos
    return contactos ? JSON.parse(contactos) : [];
}

const Contactos = () => {
//creamos el reducer utilizamos el hook reducer y le pasamos el reducer y el estado inicial
//const reducer=useReducer(ContactosReducer,contactos);

const [state, dispatch] = useReducer(ContactosReducer, [], init);//inicializador es una funcion que se encarga de calcular el valor inicial del estado
//agregagamos un usestate para el formulario es visible o no
const [FormView, setFormView] = useState(false)


//agregar un UseEffect para guardar en el local storage
useEffect(() => {
//Creamos un local storage
localStorage.setItem("contactos", JSON.stringify(state));
},[state]
)

  return (
    <div className='container mt-3'>
        <button onClick={()=>setFormView(!FormView)}
         className="btn btn-success" >{!FormView ? "+ Agregar contacto" : "- cerrar"}</button>
        {FormView &&<FormularioAdd dispatch={dispatch}/>}
        <TablaContactos contactos={state} dispatch={dispatch} />
    </div>
  )
}

export default Contactos