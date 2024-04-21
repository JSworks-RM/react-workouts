import React from 'react'
import CourseCard from '../Molecules/CourseCard'
import withLoader from '../HOC/withLoader'

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


//export default withLoader ("courses", CourseGrid) // Pasamos llave y componente de esta manera
export default withLoader ("courses")(CourseGrid) // Pasamos los atributos, las props, y seguido pasamos el componente