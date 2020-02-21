import { createStore } from 'redux' // Importamos método createStore de librería redux
import { ADD_TO_CART, REMOVE_FROM_CART } from './actions'
import { composeWithDevTools } from 'redux-devtools-extension'

// Creamos el reducer que es el que va a hacer los cambios en el store
// Reducer para poder manejar el estado recibo el estado inicial y recibe la acción que debe ejecutar para modificar el estado
// Con esa información el va a retornar un nuevo estado
// Como la primera vez que cargue el estado no va a existir, para que no devuelva undefined le indicaremos que su estado va a ser igual a un estado inicial
// Para saber que es inicialStore debemos declararlo, sino igual sería un undefined
const cursos = [
        {
          "id": 1,
          "titulo": "React desde cero",
          "image": "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png",
          "price": 40,
          "profesor": "Beto Quiroga",
          "avatar": "https://api.ed.team/files/avatars/38118146-4b4a-4844-8959-157614e04cd1.jpg"
        },
        {
          "id": 2,
          "titulo": "Drupal desde cero",
          "image": "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/drupal-poster-720_3.jpg?itok=e93ErhMN",
          "price": 30,
          "profesor": "Beto Quiroga",
          "avatar": "https://api.ed.team/files/avatars/38118146-4b4a-4844-8959-157614e04cd1.jpg"
        }, 
        {
          "id": 3,
          "titulo": "Go desde cero",
          "image": "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/go_0.jpg?itok=k2amLhrN",
          "price": 50,
          "profesor": "Alexys Lozada",
          "avatar": "https://api.ed.team/files/avatars/747dea4d-4438-4a7e-904a-427a5cd6aac7.jpg"
        }, 
        {
          "id": 4,
          "titulo": "HTML desde cero",
          "image": "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/HTML-2018.jpg?itok=Gyvm-W9t",
          "price": 10,
          "profesor": "Alvaro Felipe",
          "avatar": "https://api.ed.team/files/avatars/18a0441b-8357-488f-a461-21d07260f46a.jpg"
        }
      ]

const initialStore = {
    cart: [],
    courses: cursos
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

    if ( type === REMOVE_FROM_CART ) {
        return {
            ...state,
            cart: state.cart.filter(c => c !== id) 
        }
    }

    return state
}

// Exportamos la función createStore() que importamos de redux y le pasamos al reducer
export default createStore(rootReducer, composeWithDevTools())