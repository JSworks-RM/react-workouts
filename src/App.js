import React from 'react';
//import logo from './logo.svg';
// import './App.css'; 
import "./styles/styles.scss"
import Curso from "./Curso"

const App = () => (
  <>
  <div className="main-banner img-container l-section" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img className="main-banner__img" alt="Netherland" src="https://www.eu-startups.com/wp-content/uploads/2020/01/canal-2659062_1280.jpg" />
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Título del banner</p>
          <p> Subtítulo del banner</p>
          <a href="https://ed.team" className="button">Botón del banner</a>
        </div>
      </div>
    </div>
  </div>

  <div className="ed-grid m-grid-3">
    <Curso 
      title="React desde cero con EdTeam" 
      image="https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20Rutas%20manejo%20de%20estados%20%281%29.png" 
      price="20 USD" 
      profesor="Beto Quiroga"
    />

    <Curso 
      title="PHP desde cero con EdTeam 2019" 
      image="https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2018-10/php%20desde%20cero.jpg" 
      price="25 USD" 
      profesor="Yesy Days"
    />
  </div>

</>

)

export default App;


// Reglas JSX
// 1: Toda etiqueta debe cerrarse
// 2: Los componentes deben devolver UN sólo elemento padre
// 3: Apoyarse de los Fragment cuando queremos devolver 2 elementos
// 4: Fragment => <> hijos </>
// 5: img siempre se cierra
// 6: className => classNameName
// 7: for => htmlFor
// 8: No if, else, while