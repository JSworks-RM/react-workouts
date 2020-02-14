import React, { Component } from 'react'
import axios from 'axios'

// Para obtener el parámetro que viene de la url se obtiene a través de la propiedad match que se encuentra dentro del objeto prop. Entonces destructoramos el objeto prop para leer sólo el atributo match
class Course extends Component { 
  constructor (props) {
    super (props)

    this.state = {
      currentCourse: {}
    }
  }
    
    render () {
      return (
        <div className="ed-grid m-grid-3">
        {
            this.state.currentCourse ? (
                <>
                    <h1 className="m-cols-3">{ this.state.currentCourse.titulo }</h1>
                    <img className="m-cols-1" src={ this.state.currentCourse.image } alt={ this.state.currentCourse.titulo } />
                    <p className="m-cols-2">Profesor: { this.state.currentCourse.profesor }</p>
                </>
            )
            :   <h1>El curso no existe</h1>
        }
        </div>
      )
    }

    componentDidMount () {
      axios.get(`http://my-json-server.typicode.com/joseignaciorm/json-db/cursos/${this.props.match.params.id}`)
      .then(res => this.setState({
        currentCourse: res.data
      }))
    }
}

export default Course