import React from 'react'


// Para el formulario ya no vamos a escribir una función sino, un componente de clase. Para escribir una clase, importamos react y creamos una clase
// Por buenas prácticas la clase se va a llamar como el archivo
// Para poder utilizar la clase por conceptos de herencia, la clase debe ser una extensión de React.Componet
// De esa manera, la clase formulario va a extender todos los atributos y métodos de Component que precisamente declaran las cualidades de un componente como tal

class Formulario extends React.Component {
    // Si no necesitaramos props, no haría falta usar el constructor. En la mayoría de los casos vamos a necesitar props
    constructor (props) {
        super(props)
    }

    // Método render() es obligatorio. Render() retorna el contenido del componente. En este caso retornamos un elemento JSX
    render () {
        return (
            <div className="ed-grid">
                <h1>Formulario</h1>
            </div>
        )
    }

}

export default Formulario