import React from "react"
import ReactDOM from "react-dom"
import App from "./Components/App"

const root = document.getElementById("root")
// El método createElemet de react nos permite crear un elemento y renderizarlo en pantalla. Este método recibe tres parámetros (el componente a crear, las propiedades que va a tener este componente y recibe todos los hijos que va a tener este componente)
//elemento = React.createElement(componente, propiedades, hijos)
//elemento = React.createElement("h1", { className: "saludo" }, "Hola Mundo")

// Método render renderiza algún elemento html y necesita como parámetros un elemento para renderizar y un lugar en el DOM dónde queremos insertar dicho elemento
ReactDOM.render(<App />, root)
