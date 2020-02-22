import { ADD_TO_CART, REMOVE_FROM_CART, GET_COURSE_LIST } from "./actions";
import axios from 'axios'


// Creamos función actionCreator que retorna un objeto con la acción que se va a ejecutar
const addToCart = id => ({
    type: ADD_TO_CART,
    id
})

const removeFromCart = id => ({
    type: REMOVE_FROM_CART,
    id
})

// Creamos action que returna un dispatch, hace una petición a nuestro servidor mediante axios.
// La respuesta nos retornará un dispatch con el objeto despachado
const getCourseList = () => dispatch => {
    axios.get('https://my-json-server.typicode.com/joseignaciorm/json-db/cursos')
    .then(response => {
        return dispatch({
            type: GET_COURSE_LIST,
            courses: response.data
        })
    })
}

// Exporto sin default porque probablemente estemos exportando varias funciones y debemos aplicar destructuración
export { addToCart, removeFromCart, getCourseList } 