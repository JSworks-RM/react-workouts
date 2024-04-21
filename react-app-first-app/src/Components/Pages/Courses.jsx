import React, { Component } from 'react'
import axios from 'axios'
import CourseGrid from '../Organisms/CourseGrid'

// Como hemos creado una API Rest de la data de cursos. Ahora la vamos a consumir desde el servidor
// Lo primero es que debemos cambiar la representación del componente de funcion a clase para poder trabajar con state y los ciclos de vida del componente
// Pero para eso tenemos la solución con la ayuda de los hooks de react que veremos mas adelante como hacerlo

class Courses extends Component {
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
      return <CourseGrid courses = {courses} /> 
    }
  }


export default Courses