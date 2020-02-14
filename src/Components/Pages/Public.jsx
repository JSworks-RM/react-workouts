import React from 'react'
import withLogin from '../HOC/withLogin'
import SquareFiles from './SquareFiles'
import CircleFiles from './CircleFiles'

const Public = (props) => (
    <>
        <div className="">
            {console.log(props)}
            <h1>{props.loggued ? "Página publica" : "No hay login" }</h1>
        </div>
        <div className="imgLoaders">
                <SquareFiles />
                <CircleFiles />
        </div>
    </>
)

export default withLogin(Public)