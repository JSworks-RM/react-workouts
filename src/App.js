import React from 'react'
import "./styles/styles.scss"
import Curso from "./Curso"

const cursos = [
  {
    "titulo" : "Laravel desde cero",
    "image" : "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2018-10/Laravel%20Desde%20Cero.jpg",
    "price" : 20,
    "profesor" : "Yesi Days",
    "avatar" : "https://api.ed.team/files/avatars/77b7035b-3025-408c-aea0-22f6386c428e.jpg"
  },
  {
    "titulo" : "NodeJS desde cero",
    "image" : "https://res.cloudinary.com/edteam/image/upload/w_400/v1573257385/courses/nodejs.png",
    "price" : 40,
    "profesor" : "Camilo Montoya",
    "avatar" : "https://api.ed.team/files/avatars/ed17fe0c-1dc1-4bf6-b823-7594cc2d465d.jpeg"
  },
  {
    "titulo" : "GIT desde cero 2020",
    "image" : "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-11/git-desde-cero-1.png",
    "price" : 25,
    "profesor" : "Beto Quiroga",
    "avatar" : "https://api.ed.team/files/avatars/38118146-4b4a-4844-8959-157614e04cd1.jpg"
  },
  {
    "titulo" : "React desde cero",
    "image" : "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20Rutas%20manejo%20de%20estados%20%281%29.png",
    "price" : 35,
    "profesor" : "Beto Quiroga",
    "avatar" : "https://api.ed.team/files/avatars/38118146-4b4a-4844-8959-157614e04cd1.jpg"
  }
]

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
      {
        // Hacemos un map al array cursos y por cada delemento dibujo un curso y le paso las propiedades que necesita ese componente
        cursos.map( c => <Curso title={c.titulo} image={c.image} profesor={c.profesor} price={c.price} avatar={c.avatar} />)
      }
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