import { ADD_TO_CART } from "./actions";

// Creamos función actionCreator que retorna un objeto con la acción que se va a ejecutar
const addToCard = id => ({
    type: ADD_TO_CART,
    id
})

// Exporto sin default porque probablemente estemos exportando varias funciones y debemos aplicar destructuración
export { addToCard } 