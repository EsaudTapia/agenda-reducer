import React from 'react'

const TablaContactos = ({contactos=[],dispatch}) => {
  //Definimos un metodo llamado handleDelete que recibe un id
    //y despacha un actionDelete

    const handleDelete=(id)=>{
        //definimos el action para el delete
        const actionDelete={
            type:"delete",
            payload:id
        }
        //despachamos el action
        dispatch(actionDelete);

    }
  
    return (
    <table className='table'>
        <thead>
            <tr>
                <th>#Id</th>
                <th>Imagen</th>
                <th>Nombre</th>            
                <th>Teléfono</th>
                <th>Edad</th>
                <th>Sexo</th>
                <th>Acciones</th>
            </tr>
        </thead>
        
        <tbody>
            {
                contactos.map((contacto) => {
                    const finalId=contacto.id.split("-");
                    const edad= new Date().getFullYear()-new Date(contacto.fechaNacimiento).getFullYear();
                    return(
                        <tr key={contacto.id}>                           
                            <td>{finalId[0]}</td>
                            <td><img src={contacto.imagen} alt={contacto.nombre} className="img-fluid" width="50px"/></td>
                            <td>{contacto.nombre}</td>
                            <td>{contacto.telefono}</td>
                            <td>{edad}</td>
                            <td>{contacto.sexo === "M" ? "Masculino" : "Femenino"}</td>
                            <td>
                                <button onClick={()=>handleDelete(contacto.id)} className='btn btn-danger '>Eliminar</button>
                            </td>
                        </tr>

                    )
                })
            }
        
        </tbody>

    </table>
  )
}

export default TablaContactos