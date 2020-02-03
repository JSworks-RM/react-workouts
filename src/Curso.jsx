import React from "react"


// Como sabemos que la función esta recibiendo un objeto, podemos asignar las llaves que nos interesen para éste componente
const Curso = ( { title, image, price, profesor } )=> (
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img src={ image } alt={ title } />
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="t5 s-mb-2 s-center">
            { `Prof. ${profesor}` }
        </h3>
        <div className="s-mb-2 s-main-center">
            <div className="card__teacher s-cross-center">
            <div className="card__avatar s-mr-1">
                <div className="circle img-container">
                <img src="https://api.ed.team/files/avatars/38118146-4b4a-4844-8959-157614e04cd1.jpg" alt={ title } />
                </div>
            </div>
            <span className="small">{``}</span>
            </div>
        </div>
        <div className="s-main-center">
<a className="button--ghost-alert button--tiny" href="/">{ `$ ${ price }` }</a>
        </div>
        </div>
 </article>
)

export default Curso