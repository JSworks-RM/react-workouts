import React from 'react'
import CourseCard from '../Molecules/CourseCard'

const CourseGrid = ( { courses } ) => (
     
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


//Hemos desactivado, quitado el HOC withLoader que ya no necesitamos para cargar cursos desde el estado global
export default CourseGrid