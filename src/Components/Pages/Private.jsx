import React from 'react'
import withLogin from '../HOC/withLogin'

const Private = (props) => (
    <div className="">
        {console.log(props)}
        <h1>{props.loggued ? "Página privada" : "No hay login" }</h1>
    </div>
)

export default withLogin(Private)