import React from 'react'
import "../styles/styles.scss"
import AppRoutes from './AppRoutes'
import { Provider } from 'react-redux' // Provider: Proveedor de un estado global de nuestro store
import store from '../redux/store'
import { getCourseList } from '../redux/actionCreators'

// Despachamos nuestra lista de cursos desde la petición a nuestro servidor
store.dispatch(getCourseList())

const App = () => (

  // Componente Provider le pasamos la propiedad store que va a recibir el store que hemos importado
  <Provider store={store}>
    <AppRoutes />
  </Provider>
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