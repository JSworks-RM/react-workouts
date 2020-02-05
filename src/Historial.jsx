import React from 'react'

// Inspeccionando las propiedades que la librería React Router manda cuando un componente: match, location, history
const Historial = ( {match, location, history} ) => (
    <>
        <div>
            { JSON.stringify(match) }
        </div>
        <div>
            { JSON.stringify(location) }
        </div>
        <div>
            { JSON.stringify(history) }
        </div>
    </>
)

export default Historial