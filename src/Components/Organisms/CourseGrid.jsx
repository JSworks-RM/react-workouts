import React from 'react'
import CourseCard from '../Molecules/CourseCard'
import withLoader from '../HOC/withLoader'

const CourseGrid = ( { courses } ) => (
     
    <div className="ed-grid m-grid-4">
        {
            courses.length === 0
            ? <h1 className="t3">Cargando...</h1>
            : courses.map(c => (
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


export default withLoader(CourseGrid)