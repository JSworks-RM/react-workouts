import React, { useState, useEffect } from 'react'
import axios from 'axios'

// Para obtener el parámetro que viene de la url se obtiene a través de la propiedad match que se encuentra dentro del objeto prop. Entonces destructoramos el objeto prop para leer sólo el atributo match
const Course = ( { match } ) => { 

    const [ course, setCourse ] = useState ({})
    const [ comment, setComment ] = useState("Sin comentarios")

    // useEffect() va a ser llamado siempre que el componente se renderice creando un loop infinito. Por eso el segundo parámetro que recibe la función useEffect, como regla, le pasamos un array vacío [] para que se renderice sólo una sola vez; es una forma de simular el component didMount que corre solo una vez
    // useEffect() recibe como primer parámetro un callback que en el bloque vamos a poder ejecutar la función que nosotros queramos. En nuestro ejemplo de course, vamos a hacer una petición http al servidor con axios y cuando la promesa se resuelva, nos devuelva una respuesta y con esa respuesta vamos a actualizar el estado.
    useEffect (() => {
      axios.get(`http://my-json-server.typicode.com/joseignaciorm/json-db/cursos/${match.params.id}`)
        .then(res => setCourse ( res.data )) // Promesa donde ejecutamos setState para cambiar el estado actual de useState()
        }, [] )

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