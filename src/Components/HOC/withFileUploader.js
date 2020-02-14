import React, { Component } from 'react'

// HOC para cargar imágenes
// Este component necesita dos cosas primordiales: El state donde vamos a guardar las imágenes recibidas por el usuario
// Segundo un fileReader que es una clase que nos provee el objeto windows del navegador para poder hacer manejos con archivos
// En este caso vamos a convertir cada una de las imagemes en base 64
function withFileUpload (WrappedComponent) {
    return class withFileUpload extends Component {
        constructor (props) {
            super (props)

            this.state = { files: [] } // array de imágenes
            this.fileReader = new  FileReader() // Objeto de la clase fileReader declarado como un atributo de nuestra clase component

            this.addFile = this.addFile.bind(this)
            this.appendFile = this.appendFile.bind(this)

        }

        // Necesitamos una función que reciba las imágenes para poder convertirlas en base 64
        // Como esta función la va a estar ejecutando el evento onChange() desde un input de tipo file, entonces va a recibir ese evento como parámetro
        // Los inputs de tipo file devuelven el array con los archivos que acaba de leer
        addFile (e) {
            const files = e.target.files // Array de archivo de imagen
            console.log(files)
            this.fileReader.readAsDataURL(files[0]) // Método readAsDataURL de la clase FileReader que convierte el archivo a base 64. Método asíncrono
        }

        appendFile () {
            this.setState({
                files: [ ...this.state.files, this.fileReader.result ] // Segundo parámetro, resultado de la operación de arriba this.fileReader.readAsDataURL(files[0])
            })
        }

        // FileReader un eventListener que se encarga de guiarnos por todo el proceso de subida de la imágen llamado "load"
        // Siempre como buena práctica, cuando ejecutamos un eventListener en un componente de react siempre es buena idea removerlo en el componentWillUnmount() que es el componente de ciclo de vida que se ejecuta cuando el componente se desmonta de nuestro DOM. Ejemplo: Supongamos que el componente desaparece. El addEventListener sigue allí y esto puede llevar a que tengamos memory leak (Fuga de memoria) en nuestras aplicaciones.
        // Memory Leak: Es un error de software que ocurre cuando un bloque de memoria reservada no es liberada en un programa de computación. Comúnmente ocurre porque se pierden todas las referencias a esa área de memoria antes de haberse liberado. 
        componentDidMount () {
            this.fileReader.addEventListener('load', this.appendFile)
        }

        // Removemos el evento load para evitar fuga de memoria (memory leak)
        componentWillUnmount () {
            this.fileReader.removeEventListener('load', this.appendFile)
        }

        // Retornamos el componente con las propiedades, el método que addgrela las imagenes y el método que las convierte a base 64
        render () {
            return (
                <WrappedComponent  
                { ...this.props }
                addFile = { this.addFile }
                files = { this.state.files }
                />
            )
        }
        
    }
}

export default withFileUpload