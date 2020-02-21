import { createStore } from 'redux' // Importamos método createStore de librería redux
import { ADD_TO_CART } from './actions'

// Creamos el reducer que es el que va a hacer los cambios en el store
// Reducer para poder manejar el estado recibo el estado inicial y recibe la acción que debe ejecutar para modificar el estado
// Con esa información el va a retornar un nuevo estado
// Como la primera vez que cargue el estado no va a existir, para que no devuelva undefined le indicaremos que su estado va a ser igual a un estado inicial
// Para saber que es inicialStore debemos declararlo, sino igual sería un undefined
const initialStore = {
    cart: []
}

// Validamos el typo de action y retornamos el nuevo objeto que va a tener todas las llaves del estado para no modificar accidentalmente nada que ya este en el estado
// Y al estado anterior le concatenamos un nuevo elemento que es lo que venga en el action
// Importante: por teoria generalde JavaScript y como un principio de react que es la inmutabilidad de los objetos: nosotros no podemos directamente modificar lo que esta en el estado, sino que tenemos que darle nuevos valores
// Por eso es que usaremos el tipo de funciones como concat, filter, map, reduce, etc...
// Mejorando el código de reducer, como sabemos lo que viene en el objeto action entonces lo destructuramos
const rootReducer = ( state = initialStore, { type, id } ) => {
    if ( type === ADD_TO_CART ) {
        if ( state.cart.find(a => a === id) ) return state
        return {
            ...state,
            cart: state.cart.concat(id) 
        }
    }

    return state
}

// Exportamos la función createStore() que importamos de redux y le pasamos al reducer
export default createStore(rootReducer)