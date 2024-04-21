import React from 'react'
import withFileUpload from '../HOC/withFileUploader'

const CircleFiles = props => (
    <div className="ed-grid square">
        <h1>Cirlce Files UpLoads</h1>
        { console.log(props) }
        <form>
            <div className="ed-grid m-grid-2">
                <div className="from__item">
                    <label>Files Upload</label>
                    <input  type="file" 
                            onChange={props.addFile} />
                </div>
            </div>
        </form>
        { 
            props.files.map((file, index) => (
                <div className="ed-grid image mb-2" key={index}>
                    <img className="cirlceShape" src={file} alt="Imagen" />
                </div>
            )) 
        }
    </div>
)

export default withFileUpload(CircleFiles)