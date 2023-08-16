import Crear from "./components/Crear";
import  Listado  from "./components/Listado";
import Buscador from "./components/Buscador";

function App() {
  return (
    <div className="layout">

      <header className="header">
        <div className="Logo">
          <div className="play"></div>
        </div>
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
          <Listado></Listado>
      </section>

      <aside className="lateral">
        <Buscador></Buscador>
        <Crear/>
      </aside>

      <footer className="footer">
        {/* Contenido del pie de página */}
      </footer>
    </div>
  );
}


export default App;
