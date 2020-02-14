import React, {Component} from 'react'

// HOC para configurar un sistema de rutas públicas (No se necesita login) y uno de rutas privadas (Se necesita estar loggeado)
function withLogin (WrappedComponent) {
    return class withLoginComponent extends Component {
        constructor (props) {
            super(props)

            // Estado que va a indicar si el usuario esta o no logueado
            this.state = { 
                loggued : false 
            }
            this.verifyLogin = this.verifyLogin.bind(this)
        }

        // Como el HOC que estamos creando es para verificar si el usuario esta loggueado o no; Creamos una función para comprobar estos datos
        // Entonces, el componente va a tener un estado que va a indicar si el usuario esta o no logueado
        // La lógica que por lo general se maneja para controlar estas rutas es que Backend nos envíe un token (Encriptación de la informaciñon del usuario para poder saber quien es, etc... y poder realizar las validaciones) y desde las rutas privadas lo que se hace es hacer una petición a Backend a un EndPoint especial donde verificamos contra backen si el token que estamos enviando es válido o no.
        // Para simular ésta lógica usaremos un setTimeout() haciendo ver que es la petición que estamos solicitando generando un numero aleatorio entre 0 y 1 para simular la respuesta que vamos a obtener de backend. El 1 => usuario logueado y el 0 => Usuario no esta logueado
        // Necesitamos ejecutar esa lógina en el momento que el componente se renderise; entonces usaremos el ciclo de vida componentDidMount()
        // Para que el componente sepa que valor tiene loggued para inyectar esta lógica es pasarle al componente una prop llamada loggued en este caso que va a ser igual al state de esa propiedad (loggued)
        verifyLogin () {
            setTimeout (() => {
                const loggued = Math.round(Math.random())
                this.setState({
                    loggued: loggued === 1 // devuelve true usuario logueado
                })
            }) 
        }

        componentDidMount () {
            this.verifyLogin()
        }

        // Retornamos el componente que estámos recibiendo como parámetro en la función withLogin
        render () {
            // Los props que vamos a pasar a este componente son las que se van a recibir desde el componente withLoginComponent
            // Para que no haya conflicto al pasar los props, los pasaremos con el spread operator que nos va a permitir exparsir a este component <WrappedComponent /> las props que nos estarán enviando
            return <WrappedComponent 
                    { ...this.props  } 
                    loggued = { this.state.loggued } // Paso propiedad logged del state actual al componente
                   />
        }
    }
}

export default withLogin