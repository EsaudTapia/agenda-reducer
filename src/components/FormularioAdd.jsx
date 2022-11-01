import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const FormularioAdd = ({ dispatch }) => {
   //estados de las alertas
    const [alertImagen, setalertImagen] = useState("");
    const [alertNombre, setalertNombre] = useState("");
    const [alertTelefono, setalertTelefono] = useState("");
    const [alertFechaNac, setalertFechaNac ]= useState("");
    const [alertSexo, setalertalertSexo ]= useState("");


  //agregamos un usestate
  const [data, setdata] = useState({
    nombre: "",
    telefono: "",
    sexo: "",
    imagen: "",
    fechaNacimiento: "",
  });
  //desestructuramos el state

  const { nombre, telefono, sexo, imagen, fechaNacimiento } = data;

  //Agregamos el evento handlechange para los campos del formulario de nombre y telefono
  const handlechange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  //definimos el actionAdd paraa el dispatch el cual necesita
  //un type y un payload
  const actionAdd = {
    type: "add",
    payload: {
      id: "" + uuidv4(),
      nombre,
      telefono,
      sexo,
      imagen,
      fechaNacimiento,
    },
  };

  //metodo para manejar el submit del formulario

  const handleAdd = (e) => {

   
    //validamos que campo esta vacio
    if (nombre === "") {
        return setalertNombre("El campo nombre es obligatorio");
        
    } 
        setalertNombre("");
    
    if (telefono === "") {
        return setalertTelefono("El campo telefono es obligatorio");
    } 

    //validamos que no exista el numero de telefono en el local storage
    if (localStorage.getItem("contactos")) {
      const contactos = JSON.parse(localStorage.getItem("contactos"));
      const existe = contactos.find((contacto) => contacto.telefono === telefono);
      if (existe) {
        return setalertTelefono("El numero de telefono ya existe");

      }
    }    

    setalertTelefono("");
    
    if (imagen === "") {
        return  setalertImagen("El campo imagen es obligatorio");
    } 
    setalertImagen("");
        
    
    if (fechaNacimiento === "") {
      return  setalertFechaNac("El campo fecha de nacimiento es obligatorio");
    } 

    //convetimos la fecha de nacimiento a un objeto date
    const fechaNac=new Date(fechaNacimiento);
   //validamos que sea menor o igual a la fecha actual
    if(fechaNac>new Date()){
        return setalertFechaNac("La fecha de nacimiento no puede ser mayor a la fecha actual");
    }
        setalertFechaNac("");
    
    //verificamos el sexo
    if (sexo === "") {
      return setalertalertSexo("El campo sexo es obligatorio");
    }

    setalertalertSexo("");
    



    dispatch(actionAdd);
    //se limpiara el formulario
    setdata({
        nombre: "",
        telefono: "",
        sexo: "",
        imagen: "",
        fechaNacimiento: "",
        });
  };

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4 text-center">
                <img
                  alt="Sin imagen"
                  src={
                    imagen != ""
                      ? imagen
                      : "https://www.layoutit.com/img/sports-q-c-140-140-3.jpg"
                  }
                  className="rounded-circle"
                  width="150"
                  height="150"
                />
              </div>
              <div className="col-md-4"></div>
            </div>
            <div className="row ">
              <div className="col-md-12">
                <div className="form-group text-center">
                  <label className="mb-3" htmlFor="name">Imagen: </label>
                  <input
                    type="text"
                    className="form-control w-50  mx-auto"
                    name="imagen"
                    value={imagen}
                    onChange={handlechange}
                    placeholder="Ingrese link de imagen"
                    required="required"
                  />
                 <h6 className="text-danger"> {alertImagen}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <label className="mx-1 d-grid gap-2">
          Nombre:{" "}
          <input
            onChange={handlechange}
            name="nombre"
            value={nombre}
            type="text"
            className="form-control"
            placeholder="Nombre"
          />
        </label>

        <h6 className="text-danger"> {alertNombre}</h6>

        <label className="mx-1 d-grid gap-2">
          Telefono:{" "}
          <input
            onChange={handlechange}
            type="text"
            name="telefono"
            value={telefono}
            className="form-control"
            placeholder="Nombre"
          />
        </label>

        <h6 className="text-danger"> {alertTelefono}</h6>

        <div className="row">
          <div className="col-6">
            <label className="mx-1 d-grid gap-2">
              Fecha de nacimiento:{" "}
              <input
                onChange={handlechange}
                type="date"
                name="fechaNacimiento"
                value={fechaNacimiento}
                className="form-control"
                placeholder="Fecha de nacimiento"
              />
            </label>
            <h6 className="text-danger"> {alertFechaNac}</h6>
          </div>
          <div className="col-6">
            <label className="mx-1 d-grid gap-2">
              Sexo:{" "}
              <select
                onChange={handlechange}
                name="sexo"
                value={sexo}
                className="form-select"

              >  
             
                <option value=""> seleccione un sexo</option>
                <option  value="M">Masculino</option>
                <option value="F">Femenino</option>
              </select>
            </label>

            <h6 className="text-danger"> {alertSexo}</h6>
          </div>
        </div>

        <div className="mx-1 d-grid gap-2">
          <button onClick={handleAdd} className="btn btn-info mt-2">
            Agregar
          </button>
        </div>
      </div>
    </>
  );
};

export default FormularioAdd;
