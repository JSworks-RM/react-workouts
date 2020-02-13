import React, { Component } from 'react'
import CourseCard from '../Molecules/CurseCard'
import axios from 'axios'

// Como hemos creado una API Rest de la data de cursos. Ahora la vamos a consumir desde el servidor
// Lo primero es que debemos cambiar la representación del componente de funcion a clase para poder trabajar con state y los ciclos de vida del componente
// Pero para eso tenemos la solución con la ayuda de los hooks de react que veremos mas adelante como hacerlo

class CourseGrid extends Component {
    constructor (props) {
      super(props)
      this.state = {
        courses : []
      }
    }

    componentDidMount () {
      axios.get('http://my-json-server.typicode.com/joseignaciorm/json-db/cursos')
        .then(res => {
          this.setState({
            courses : res.data
          })
        })
    }

    render () {
      const { courses } = this.state
      return (
        <div className="ed-grid m-grid-4">
            {
                courses.map(c => (
                    <CourseCard
                        key = {c.id}
                        id = {c.id}
                        title = {c.titulo}
                        image = {c.image}
                        price = {c.price}
                        professor = {c.professor}
                        avatar = {c.avatar}
                    />
                ))
            }
        </div>
      )
    }
  }


export default CourseGrid