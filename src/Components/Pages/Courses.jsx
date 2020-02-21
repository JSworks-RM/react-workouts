import React from 'react'
import CourseGrid from '../Organisms/CourseGrid'
import { connect } from 'react-redux'

// Refactorizando ccódigo. Componente de clases lo pasamos a componente presentasional
// Componente Courses debemos pasarle la propiedad Courses desde el estado global con mapStateToProps del metodo connect()

const Courses = ({ courses }) => <CourseGrid courses = {courses} /> 

// Declarando mapStateToProps. Va a recibir el estado global y devolvemos un objeto
// coursesReducer es la nueva llave o propiedad que contiene el array courses al implementar el método combineReducers()
const mapStateToProps = state => ({
  courses: state.coursesReducer.courses
})

// Conectamos Componente Courses con el store
export default connect(mapStateToProps, {})(Courses)