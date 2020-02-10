import React, { Component } from 'react'
import UserCard from '../Molecules/UserCard'

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
    componentDidMount () {
        fetch ( 'https://jsonplaceholder.typicode.com/users', { method: 'get'} )
        .then( response =>  response.json() ) // Enviamos otra promesa a la respuesta. Para este ejemplo en la documentación lo requiere
        .then( response2 => {
            // Guardamos la data en el estado
            this.setState({
                users: response2
            })
        }) // Aqui si nos devuelve la data
    }

    render () {
        const { users } = this.state
        return (
            <div className="ed-grid">
                <h1>Usuarios</h1>
                <div className="ed-grid s-grid-2 m-grid-3 l-grid-4">
                    {
                        users.map(u => (    
                            <UserCard 
                                key={u.id} 
                                name={u.name} 
                                username={u.username}
                                email={u.email} 
                            /> ))
                    }
                </div>
            </div>
        )
    }

}


export default Users