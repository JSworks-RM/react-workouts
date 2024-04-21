import React, { useState, useEffect } from 'react'
import axios from 'axios'

// Esta función CustomHook le enviaremos el id de la petición http para mantener la lógica.
// Y para utilizarlo declaramos una constante que va a ser igual a lo que va a retornar el CustomHook
const useCourse = id => {

    const [ course, setCourse ] = useState ({})

    // useEffect() va a ser llamado siempre que el componente se renderice creando un loop infinito. Por eso el segundo parámetro que recibe la función useEffect, como regla, le pasamos un array vacío [] para que se renderice sólo una sola vez; es una forma de simular el component didMount que corre solo una vez
    // useEffect() recibe como primer parámetro un callback que en el bloque vamos a poder ejecutar la función que nosotros queramos. En nuestro ejemplo de course, vamos a hacer una petición http al servidor con axios y cuando la promesa se resuelva, nos devuelva una respuesta y con esa respuesta vamos a actualizar el estado.
    useEffect (() => {
        axios.get(`http://my-json-server.typicode.com/joseignaciorm/json-db/cursos/${id}`)
          .then(res => setCourse ( res.data )) // Promesa donde ejecutamos setState para cambiar el estado actual de useState()
          }, [] )

    return course
    
}

export default useCourse