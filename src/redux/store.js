import { createStore, combineReducers, applyMiddleware } from 'redux' // Importamos método createStore de librería redux. librería Middleware
import { ADD_TO_CART, REMOVE_FROM_CART, GET_COURSE_LIST } from './actions'
import thunk from 'redux-thunk' // Middleware para peticiones asíncronas
import { composeWithDevTools } from 'redux-devtools-extension'

// Creamos el reducer que es el que va a hacer los cambios en el store
// Reducer para poder manejar el estado recibo el estado inicial y recibe la acción que debe ejecutar para modificar el estado
// Con esa información el va a retornar un nuevo estado
// Como la primera vez que cargue el estado no va a existir, para que no devuelva undefined le indicaremos que su estado va a ser igual a un estado inicial
// Para saber que es inicialStore debemos declararlo, sino igual sería un undefined

// Valor del estado inicial del rootReducer
const initialStore = {
    cart: []
}

// Valor del estado inicial del coursesReducer
const initialCourses = {
    courses: []
}

// Validamos el typo de action y retornamos el nuevo objeto que va a tener todas las llaves del estado para no modificar accidentalmente nada que ya este en el estado
// Y al estado anterior le concatenamos un nuevo elemento que es lo que venga en el action
// Importante: por teoria generalde JavaScript y como un principio de react que es la inmutabilidad de los objetos: nosotros no podemos directamente modificar lo que esta en el estado, sino que tenemos que darle nuevos valores
// Por eso es que usaremos el tipo de funciones como concat, filter, map, reduce, etc...
// Mejorando el código de reducer, como sabemos lo que viene en el objeto action entonces lo destructuramos
const cartReducer = ( state = initialStore, { type, id } ) => {
    if ( type === ADD_TO_CART ) {
        if ( state.cart.find(a => a === id) ) return state
        return {
            ...state,
            cart: state.cart.concat(id) 
        }
    }

    if ( type === REMOVE_FROM_CART ) {
        return {
            ...state,
            cart: state.cart.filter(c => c !== id) 
        }
    }

    return state
}

// Creamos un nuevo empleado reducer
const coursesReducer = ( state = initialCourses, action ) => {
  if ( action.type === GET_COURSE_LIST ) {
    return {
      ...state,
      courses: action.courses
    }
  }
  return state
}

// Exportamos la función createStore() que importamos de redux y le pasamos al reducer
// Como segundo parámetro activando el composeWithDevTools y le pasamos el moddleware con el thunk
export default createStore(combineReducers( { cartReducer, coursesReducer }), composeWithDevTools( applyMiddleware(thunk) ) )