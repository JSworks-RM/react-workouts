import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'
import { addToCart, removeFromCart } from "../../redux/actionCreators"
import { connect } from 'react-redux'


// Como sabemos que la función esta recibiendo un objeto, podemos asignar las llaves que nos interesen para éste componente
const CourseCard = ( { id, title, image, price, professor, avatar, addCourseToCart, cart, removeCourseFromCart } ) => (
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <Link to={`cursos/${id}`}>
                <img src={ image } alt={ title } />
            </Link>
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">
                { title }
            </h3>
            <div className="s-mb-2 s-main-center">
                <div className="card__teacher s-cross-center">
                    <div className="card__avatar s-mr-1">
                        <div className="circle img-container">
                            <img src={avatar} alt={ title } />
                        </div>
                    </div>
                    <span className="small">{professor}</span>
                </div>
            </div>
            <div className="s-main-center s-mb-2">
                <span className="button--ghost-alert button--tiny s-mr-2">{ `$ ${ price }` }</span>
                { 
                    cart.find( a => a === id ) 
                    ?
                        <button
                        className="button--ghost-alert button--tiny"
                        onClick={() => removeCourseFromCart(id) }
                        >
                        Remove From Cart</button>
                    :
                        <button 
                        className="button--ghost-alert button--tiny"
                        onClick={() => addCourseToCart(id) }
                        >
                        Add To Cart
                        </button>
                }
            </div>
        </div>
    </article>
)

// A Curso le indicamos que defina las propiedades del PropType que va a ser un objeto.
// En el objeto debemos indicar que tipo de dato nos va a llegar
CourseCard.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    professor: PropTypes.string,
    avatar: PropTypes.string
}

// Además le indicamos al componente que defina sus defaultProps
CourseCard.defaultProps = {
    title: "No se ha encontrado título",
    image: "https://www.tekcrispy.com/wp-content/uploads/2017/12/bancos-imagenes-gratis-640x422.jpg",
    price: "--",
    professor: "",
    avatar: ""
}


// Creamos la función addCourseToCard que va a ejecutar un dispatch.
// Para que funcione la función y pueda tener alcance a las props globales del store hay que conectar nuestro componente al store
// El método dispatch() va a hacer la llamada a la acción que queremos ejecutar y que hemos creado en el actionCreators().

// Enviamos un objeto vacío debido a que no necesitamos un mapStateToProps
const mapStateToProps = state => ({
    // Leémos el estado global y ya podemos disponer del array de objeto de este estado global en nuestro componente CourseCard
    // rootReducer es la nueva llave o propiedad que contiene el array cart al implementar el método combineReducers()
    cart: state.rootReducer.cart 
}) 

// mapDispatchToProps recibe un dispatch como callback con el que vamos a generar otro objeto 
// y en este caso el primer atributo o valor de nuestro objeto va a ser nuestra función addCourseToCard
// Ahora que mapDispatchToProps ha convertido en propiedades a la función pasada como atributo del objeto de la función dispatch,
// Significa que tenemos que acceder a la función addCourseToCard por medio de las propiedades del componente, 
// entonces de esa manera es que recibimos esa función para poder usarla en nuestro componente que ya esta conectado al store.
// de otra manera no podríamos usar esta función para trabajar con los estados globales.
// Con esto ya estamos despachando a nuestra acción, y nuestra acción es ADD_TO_CART
const mapDispatchToProps = dispatch => ({
    addCourseToCart (id) {
        dispatch( addToCart(id) )
    },

    removeCourseFromCart (id) {
        dispatch ( removeFromCart(id) )
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CourseCard)