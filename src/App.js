import React from 'react'
import "./styles/styles.scss"

// Components
import Banner from "./Banner"
import Formulario from './Formulario'
import CourseGrid from './CourseGrid';
import Course from './Course'

// Importando de la librería React Router los componentes "Router y Route"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' 



const App = () => (
  // Envolvemos nuestra app dentro del componente Router
  // Dentro del componente Router declaramos rutas y cada una de las rutas también va a ser un llamado a un componente
  // El componente ruta "Route" necesita dos propiedades "Props": 
  // 1: El path="/" (La ruta en el navegador del componente que queremos leer)
  // 2: Atributo booleano, por defecto es false para declarar que la ruta es exacta se pone "exact"
  // Por último indicamos que componente vamos a imprimir en esa ruta. ej: component={Banner}
  // Con el componente Switch evitamos que se pinte una ruta default en todas las demás rutas.
  // Para pasar un parámetro a una ruta se usa la sintaxis :parametro
  <Router>
    <Switch>
      <Route path="/" exact component={Banner} />
      <Route path="/cursos/:id" component={Course} />
      <Route path="/cursos" component={CourseGrid} />
      <Route path="/formulario" component={ () => <Formulario name={'Página de contacto'} /> } />
      <Route component={() => (
        <div className="ed-grid">
          <h3>Error 404</h3>
          <span>Página no encontrada</span>
        </div>
      )} />
    </Switch> 
  </Router>

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