import React from 'react'


// Para el formulario ya no vamos a escribir una función sino, un componente de clase. Para escribir una clase, importamos react y creamos una clase
// Por buenas prácticas la clase se va a llamar como el archivo
// Para poder utilizar la clase por conceptos de herencia, la clase debe ser una extensión de React.Componet
// De esa manera, la clase formulario va a extender todos los atributos y métodos de Component que precisamente declaran las cualidades de un componente como tal

class Form extends React.Component {
    // Si no necesitaramos props, no haría falta usar el constructor. En la mayoría de los casos vamos a necesitar props
    constructor (props) {
        super(props)

        // El estado es sólo para el componente donde se está declarando. Se podria pasar al hijo pero como una propiedades de ese hijo pero no como estado.
        this.state = {
            name: "",
            email: "",
            date: new Date()
        }

        this.changeName = this.changeName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        //this.changeDate = this.changeDate.bind(this)

    }

        // Si hemos declarado un objeto state, ya no podemos crear un siguiemte objeto state. Para eso existe un metodo para declarar otro objeto. => this.setState({}). Recibe como parámetro un objeto que es el que se va a actualizar al nuevo estado. Este setState es el que va a ser retornado con un callback desde el input del formulario con el evento que se ejecute. SetState retornará el objeto con los valores que vayamos a querer modificar.
        // La manera mas práctica de actualizar los datos es llamando a la callback sin ejecutarla directamente en el evento accionado, y creamos el método correspondiente en la clase y muy importante hacer el bind(this) para que pueda tener alcance al método que se va a crear.
        
        // Método que va a cambiar el estado input nombre
        changeName (e) {
            this.setState({
                name: e.target.value
            })
        }
        
        changeEmail (e) {
            this.setState({
                email: e.target.value
            })
        }

        changeDate () {
            this.setState({
                date: new Date()
            })
        }
    

    // Método render() es obligatorio. Render() retorna el contenido del componente. En este caso retornamos un elemento JSX
    render () {
        return (
            <div className="ed-grid">
                <h1>Formulario {this.props.name}</h1>
                <h4>date: { Math.ceil(this.state.date / 1000) }</h4>
                <form id="form-elemento">
                    <div className="ed-grid m-grid-2">
                        <div className="from__item">
                            <label>Nombre completo</label>
                            <input  type="text" 
                                    onChange={this.changeName} />
                        </div>
                        <div className="from__item">
                            <label>Correo Electrónico</label>
                            <input  type="email"
                                    onChange={ this.changeEmail} />
                        </div>
                    </div>
                </form>

                <div>
                    <h2>{ `Hola ${this.state.name}` }</h2>
                    <span>{ `Tu correo es: ${this.state.email}` }</span>
                </div>
            </div>
        )
    }

    componentDidMount () {
        let element = document.getElementById('form-elemento')
        console.log(element)

        this.intervalDate = setInterval( () => {
            this.changeDate()
            console.log(new Date())
        }, 1000)
    }

    componentDidUpdate (prevProps, prepState) {
        //console.log(prepState)
    }

    componentWillUnmount () {
        clearInterval (this.intervalDate)
    }

}

export default Form