import React, { useEffect, useState } from "react";

export const Listado = ({ listadoState, setListadoState }) => {
  useEffect(() => {
    console.log("componente de peliculas");
    conseguirPeliculas();
  }, []);
  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelis"));
    setListadoState(peliculas);
  };
  // Estado para almacenar las clasificaciones de las películas
  const [ratingState, setRatingState] = useState({});

  const handleRating = (peliId, rating) => {
    // Actualiza el estado de clasificación de la película
    setRatingState((prevRatingState) => ({
      ...prevRatingState,
      [peliId]: rating,
    }));

    // Actualiza la clasificación en el estado general
    setListadoState((prevListado) =>
      prevListado.map((peli) =>
        peli.id === peliId ? { ...peli, rating } : peli
      )
    );
  };
  return (
    <>
      {listadoState != null ? (
        listadoState.map((peli) => {
          return (
            <article key={peli.id} className="peli-item">
              <h3 className="title">{peli.titulo}</h3>
              <p className="description">{peli.description}</p>
              <button className="edit">Editar</button>
              <button className="delete">Borrar</button>
              <div className="rating">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <span
                    key={rating}
                    className={`star ${
                      ratingState[peli.id] >= rating ? "selected" : ""
                    }`}
                    onClick={() => handleRating(peli.id, rating)}
                  >
                    ★
                  </span>
                ))}
              </div>
            </article>
          );
        })
      ) : (
        <h2>No hay peliculas para mostrar</h2>
      )}
    </>
  );
};

export default Listado;
