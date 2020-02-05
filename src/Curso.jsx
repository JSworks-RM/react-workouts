import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'


// Como sabemos que la función esta recibiendo un objeto, podemos asignar las llaves que nos interesen para éste componente
const Curso = ( { id, title, image, price, profesor, avatar } ) => (
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
            <span className="small">{profesor}</span>
            </div>
        </div>
        <div className="s-main-center">
            <a className="button--ghost-alert button--tiny" href="/">{ `$ ${ price }` }</a>
        </div>
        </div>
 </article>
)


// A Curso le indicamos que defina las propiedades del PropType que va a ser un objeto.
// En el objeto debemos indicar que tipo de dato nos va a llegar
Curso.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    profesor: PropTypes.string,
    avatar: PropTypes.string
}

// Además le indicamos al componente que defina sus defaultProps
Curso.defaultProps = {
    title: "No se ha encontrado título",
    image: "https://www.tekcrispy.com/wp-content/uploads/2017/12/bancos-imagenes-gratis-640x422.jpg",
    price: "--",
    profesor: "",
    avatar: ""
}

export default Curso