import React from 'react'
import { connect } from 'react-redux' // Método connect() que nos va a conectar el componente con el store

// cartLength es una prop del estado global y que ya tenemos el acceso porque hemos hecho un connect del componente con el estado global por medio de mapStateToProps
const CartCounter = ( { cartLength } ) => (
    <li>
        <button className="button tiny ghost">{`Cart: ${cartLength.length}`}</button>
    </li>
)

const mapStateToProps = state => (
    {
        cartLength : state.cart // Leyendo las props del estado global y ya estan pasadas al componente que hemos conectado
    }
)

const mapDispatchToProps = dispatch => ({})


// El método connect() recibe dos propiedades
// La primera mapStateToProps: callback que mapea el estado global de la aplicación y pasa como props lo que queramos al componente a conectar. 
// Mapea, lo convierte a propiedades y asi el componente recibe estas propiedades del estado global. Entonces necesita leer ese estado.
// La segunda mapDispatchToProps que también es un callback
// Estas dos funciones son pasadas al connect.
// Pasamos el componente a conectar con el store
export default connect(mapStateToProps, mapDispatchToProps)(CartCounter)