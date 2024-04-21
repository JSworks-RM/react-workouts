import React, { useState, useEffect } from 'react'

// Creamos la function para consumir APIs usando los CustomHooks
// Para el useFetch vamos a crear tres cosas principales: 
// 1. La data que es donde va a estar viniendo nuestra información
// 2. Un booleano loadding para saber si estamos trayendo la información o si ya ha terminado
// 3. Error para saber cualquier error que pueda presentar la Applicación
// useFetch() recibe la url donde se va a estar haciendo la petición, un estado inicial y un options por si queremos pasarle que método va a ser la petición, pasarle los headders, entre otros...     
function useFetch (url, initialState, options) {
    const [data, setData] = useState(initialState) // useState devuelve array con estado actual, estado inicial y una function que va a cambiar el estado actual
    const [loading, setLoading] = useState(false) // Estado inicial false y segundo parametro la función que cambiara es estado
    const [error, setError] = useState(null) // 1. estado null, 2. function para cambiar el estado

    // Creamos la función que va a estar haciendo la llamada a la API para traernos la información que necesitaremos ejecutarla
    function getData () {
        setLoading(true)
        fetch(url)
            .then(response => response.json())
            .then(response => {
                setData(response)
                setLoading(false) // VOlvemos a false una vez que ya haya cargado la data
            })
            .catch (error => {
                setLoading(false)
                setError(error)
            })
        }  

    // useEffect() permite utilizar el ciclo de vida de react. Emular el componentDidMount, componentWillUnmount... y por defecto se comporta como el didUpdate. Recibe una función y un array que hace que cuando los valores que esten dentro de ese array cambien se actualice el useEffect(). Si queremos que se comporte como un didMount debemos dejar el array vacío. De esta manera se va a ejecutar una vez y no cada vez que nuestro hook se este actualizando.
    useEffect (() => {
        getData()
    }, [])

    // Retornamos los valores del useState
    return {
        data,
        loading,
        error
    }
}

export default useFetch