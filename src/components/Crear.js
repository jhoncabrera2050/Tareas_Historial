import React, { useState } from "react";
import { GuardarenStorage } from "../helpers/GuardarenStorage";

export const Crear = ({setListadoState}) => {

  const tituloComponente = "Añadir pelicula";
  const [peliState, setPeliState] = useState({
    titulo : '',
    description : ''
  });
  const {titulo,description} = peliState;

  const [modalVisible, setModalVisible] = useState(false);
  const conseguirdatosform = e =>{
    {/* evitar refresco de pantall  */}
    e.preventDefault();
    let target = e.target;
    let titulo = target.titulo.value;
    let description = target.description.value;
    if(!titulo || !description){
      setModalVisible(true);
      return; // Sale de la función si no se ingresaron datos
    }

    {/* crear objeto  */}
    let peli = {
      id : new Date().getTime(),
      titulo,
      description
    }
    // guardar estado
    setPeliState(peli);
    // actualizar estado
    // guardar en el localstorage
    GuardarenStorage("pelis", peli);
    setListadoState(elementos =>{
      return [...elementos, peli];
    })
    
  }

  return (
    <div className="add">
      <h3 className="title">{tituloComponente}</h3>
      {modalVisible && (
        <div className="custom-modal">
          <div className="modal-content">
            <h2>Error</h2>
            <p>Debes ingresar datos en ambos campos.</p>
            <button onClick={() => setModalVisible(false)}>Cerrar</button>
          </div>
        </div>
      )}
      {(titulo && description) && "Has creado la pelicula : " + titulo}
      <form onSubmit={conseguirdatosform}>
        <input 
        type="text" 
        id="titulo"
        name="titulo"
        placeholder="Titulo"/>
        <textarea 
        id="descripcion"
        name="description"
        placeholder="Descripcion"
        ></textarea>
        <input type="submit" value="Guardar" />
      </form>
    </div>
  );
};

export default Crear;
