import React, { useState } from 'react'

// Para obtener el parámetro que viene de la url se obtiene a través de la propiedad match que se encuentra dentro del objeto prop. Entonces destructoramos el objeto prop para leer sólo el atributo match
const Course = ( { match } ) => { 

    const [ state, setState ] = useState ({
      currentCourse : 
        {
          "id": 1,
          "titulo": "React desde cero",
          "image": "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png",
          "price": 40,
          "profesor": "Beto Quiroga",
          "avatar": "https://api.ed.team/files/avatars/38118146-4b4a-4844-8959-157614e04cd1.jpg"
        }
    })

    return (
        <div className="ed-grid m-grid-3">
        {
            state.currentCourse ? (
                <>
                    <h1 className="m-cols-3">{ state.currentCourse.titulo }</h1>
                    <img className="m-cols-1" src={ state.currentCourse.image } alt={ state.currentCourse.titulo } />
                    <p className="m-cols-2">Profesor: { state.currentCourse.profesor }</p>
                </>
            )
            :   <h1>El curso no existe</h1>
        }
        </div>
    )
}

export default Course