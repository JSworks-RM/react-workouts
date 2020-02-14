import React from 'react'
import withLogin from '../HOC/withLogin'

const Public = (props) => (
    <div className="">
        {console.log(props)}
        <h1>{props.loggued ? "Página publica" : "No hay login" }</h1>
    </div>
)

export default withLogin(Public)