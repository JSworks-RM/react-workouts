import React from 'react'
import "./styles/styles.scss"
import Banner from "./Banner"
import Formulario from './Formulario'
import CourseGrid from './CourseGrid';



const App = () => (
  <>
    <Banner />
    <CourseGrid />
    <Formulario name={'contacto'} />
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