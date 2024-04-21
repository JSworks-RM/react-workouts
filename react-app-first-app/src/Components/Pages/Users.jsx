import React, { Component } from 'react'
import axios from 'axios'
import UsersGrid from '../Organisms/UsersGrid'

class Users extends Component {

    // Método constructor que va a recibir las propiedades y las pasaremos por herencia al componente para que sea creado
    constructor (props) {
        super(props)

        this.state = {
            users: []
        }

    }

    // Cuando el componente se monta, haya cargado, vamos a traer con un fetch (nativo de JavaScript) el código donde se necesita solo la url y un objeto con la configuración que en este caso necesita el método get
    // En el primer then() obtengo respuesta y ejecuto una promesa concatenada
    // Y esa promesa cuando se resuelve, nos va a traer el array de objeto que es el que guardaremos en el estado
    /* componentDidMount () {
        fetch ( 'https://jsonplaceholder.typicode.com/users', { method: 'get'} )
        .then( response =>  response.json() ) // Enviamos otra promesa a la respuesta. Para este ejemplo en la documentación lo requiere
        .then( response2 => {
            // Guardamos la data en el estado
            this.setState({
                users: response2
            })
        }) // Aqui si nos devuelve la data
    } */

    // Misma peticion con axios en vez de fetch
    componentDidMount () {
        // Con axion indicamos directamente el método a usar y pasamos directamente la url
        // axios devuelve un objeto como respuesta de la promesa directamente y nos trae la data sin necesidad de resolver dos promesas
        // Entonces nos ahorramos un then, una promesa, de crear un objeto de configuración y actualizamos directamente el state
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            this.setState({
                users: res.data
            })
        })
    }

    render () {
        const { users } = this.state
        return (
            <UsersGrid users = {users} />
        )
    }

}


export default Users