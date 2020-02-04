import React from 'react'


// Para el formulario ya no vamos a escribir una función sino, un componente de clase. Para escribir una clase, importamos react y creamos una clase
// Por buenas prácticas la clase se va a llamar como el archivo
// Para poder utilizar la clase por conceptos de herencia, la clase debe ser una extensión de React.Componet
// De esa manera, la clase formulario va a extender todos los atributos y métodos de Component que precisamente declaran las cualidades de un componente como tal

class Formulario extends React.Component {
    // Si no necesitaramos props, no haría falta usar el constructor. En la mayoría de los casos vamos a necesitar props
    constructor (props) {
        super(props)

        // El estado es sólo para el componente donde se está declarando. Se podria pasar al hijo pero como una propiedades de ese hijo pero no como estado.
        this.state = {
            nombre: "",
            correo: ""
        }

        this.cambiarNombre = this.cambiarNombre.bind(this)
        this.cambiarCorreo = this.cambiarCorreo.bind(this)

    }

        // Si hemos declarado un objeto state, ya no podemos crear un siguiemte objeto state. Para eso existe un metodo para declarar otro objeto. => this.setState({}). Recibe como parámetro un objeto que es el que se va a actualizar al nuevo estado. Este setState es el que va a ser retornado con un callback desde el input del formulario con el evento que se ejecute. SetState retornará el objeto con los valores que vayamos a querer modificar.
        // La manera mas práctica de actualizar los datos es llamando a la callback sin ejecutarla directamente en el evento accionado, y creamos el método correspondiente en la clase y muy importante hacer el bind(this) para que pueda tener alcance al método que se va a crear.
        
        // Método que va a cambiar el estado input nombre
        cambiarNombre (e) {
            this.setState({
                nombre: e.target.value
            })
        }
        
        cambiarCorreo (e) {
            this.setState({
                correo: e.target.value
            })
        }
    

    // Método render() es obligatorio. Render() retorna el contenido del componente. En este caso retornamos un elemento JSX
    render () {
        return (
            <div className="ed-grid">
    <h1>Formulario {this.props.name}</h1>
                <form>
                    <div className="ed-grid m-grid-2">
                        <div className="from__item">
                            <label>Nombre completo</label>
                            <input  type="text" 
                                    onChange={this.cambiarNombre} />
                        </div>
                        <div className="from__item">
                            <label>Correo Electrónico</label>
                            <input  type="email"
                                    onChange={ this.cambiarCorreo} />
                        </div>
                    </div>
                </form>

                <div>
                    <h2>{ `Hola ${this.state.nombre}` }</h2>
                    <span>{ `Tu correo es: ${this.state.correo}` }</span>
                </div>
            </div>
        )
    }

}

export default Formulario