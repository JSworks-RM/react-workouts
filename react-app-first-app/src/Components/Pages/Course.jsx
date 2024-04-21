import React, { useState, useEffect } from 'react'
import useCourse from '../CustomHooks/useCourse'

// Para obtener el parámetro que viene de la url se obtiene a través de la propiedad match que se encuentra dentro del objeto prop. Entonces destructoramos el objeto prop para leer sólo el atributo match
const Course = ( { match } ) => { 

    const [ comment, setComment ] = useState("Sin comentarios")
    // Para utilizar el CustomHook que hemos creado, declaramos una constante que va a ser igual a lo que va a retornar el CustomHook
    const course = useCourse(match.params.id)

    const myComment = e => {
      setComment ( e.target.value )
    }

    return (
        <div className="ed-grid m-grid-3">
        {
            course ? (
                <div className="ed-grid">
                    <div className="l-block">
                      <h1 className="m-cols-3">{ course.titulo }</h1>
                      <img className="m-cols-1" src={ course.image } alt={ course.titulo } />
                      <p className="m-cols-2">Profesor: { course.profesor }</p>
                    </div>
                    <div>
                      <h2>Escribe un commentario...</h2>
                      <input type="text" placeholder="Escribe..." onChange={myComment.bind(this)} />
                      <p className="s-pt-2">{comment}</p>
                    </div>
                </div>
            )
            :   <h1>El curso no existe</h1>
        }
        </div>
    )
}

export default Course