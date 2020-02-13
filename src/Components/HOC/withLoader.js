import React, { Component } from 'react'

// Estructura de un HOC
// Una función que recibe un componente y retorna otro componente
const withLoader = (WrappedComponent) => {

    return class withLoader extends Component {

        constructor (props) {
            super (props)
        }

        render () {
            return <WrappedComponent {...this.props} /> // Retornamos el mísmo componente con sus mismas propiedades
        }

    }
}

export default withLoader