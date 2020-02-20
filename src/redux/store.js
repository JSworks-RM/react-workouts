import { createStore } from 'redux' // Importamos método createStore de librería redux

// Creamos el reducer que es el que va a hacer los cambios en el store
// Reducer para poder manejar el estado recibo el estado inicial y recibe la acción que debe ejecutar para modificar el estado
// Con esa información el va a retornar un nuevo estado
// Como la primera vez que cargue el estado no va a existir, para que no devuelva undefined le indicaremos que su estado va a ser igual a un estado inicial
// Para saber que es inicialStore debemos declararlo, sino igual sería un undefined
const initialStore = {
    cart: ["a", "b"]
}

const rootReducer = ( state = initialStore, action ) => {
    return state
}

// Exportamos la función createStore() que importamos de redux y le pasamos al reducer
export default createStore(rootReducer)