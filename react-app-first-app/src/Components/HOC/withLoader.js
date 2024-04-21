import React, { Component } from 'react'

// Estructura de un HOC
// Una función que recibe un componente y retorna otro componente. 
// const withLoader = (propValue, WrappedComponent) => { // En esta nomenclatura cuando recibimos como argumentes la llave y el componente. Ej: withLoader("courses", CourseGrid)
    const withLoader = (propValue) => (WrappedComponent) => { // Función que retorna otra función si pasamos los atributos como una función y el componente como función. Ej: withLoader ("courses")(CourseGrid)

    return class withLoader extends Component {

        constructor (props) {
            super (props)
        }

        render () {
            return this.props[propValue].length === 0 // Otra nomenclatura válida: this.props.courses.length === 0 - this.props["courses"].length === 0
            ? <h1 className="t3">Cargando...</h1>
            : <WrappedComponent {...this.props} /> // Retornamos el mísmo componente con sus mismas propiedades
        }

    }
}

export default withLoader