import React from "react";

const Crear = () => {
  return (
    <div className="add">
      <h3 className="title">Añadir Pelicula</h3>
      <form>
        <input type="text" placeholder="Titulo" />
        <textarea placeholder="Descripcion"></textarea>
        <input type="submit" value="Guardar" />
      </form>
    </div>
  );
};

export default Crear;
