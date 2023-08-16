import Crear from "./components/Crear";
import  Listado  from "./components/Listado";
import Buscador from "./components/Buscador";
import { useState } from "react";

function App() {
  const [listadoState, setListadoState] = useState([]);
  return (
    <div className="layout">

      <header className="header">

        <h1>Mis Tareas</h1>
      </header>

      <nav className="nav" >
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Peliculas</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contacto</a></li>
          
        </ul>
      </nav>

      <section className="content" >
          <Listado listadoState={listadoState} setListadoState ={setListadoState} ></Listado>
      </section>

      <aside className="lateral">
        <Buscador></Buscador>
        <Crear setListadoState={setListadoState}/>
      </aside>

      <footer className="footer">
        {/* Contenido del pie de página */}
      </footer>
    </div>
  );
}


export default App;
