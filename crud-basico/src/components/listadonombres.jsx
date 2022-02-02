import React, { useState } from 'react'

const Listadonombres = () => {

    const [nombre, setNombre] = useState('')
    const [listadonombres, setListadoNombres] = useState([])

    const addNombre = (e) => {
        e.preventDefault()
        const nuevoNombre = {
            // id:uniqid(),
            // tituloNombre:nombre
        }
        setListadoNombres([...listadonombres,nuevoNombre])
    }

    return (
        <div>
            <h2>Aplicacion CRUD basica</h2>
            <div className="row">
                <div className="col">
                    <h2>Listado de nombres</h2>
                </div>
                <div className="col">
                    <h2>Formulario para añadir nombres</h2>
                    <form onSubmit={(e)=> addNombre(e)} onSubmit={addNombre} className="form-group">
                        <input onChange={(e)=>{setNombre(e.target.value)}} className="form-control mb-3" type="text" placeholder=''/>
                        <input className="btn btn-info btn-block" type="submit" value="Registrar Nombre"/>
                    </form>
                </div>
            </div>
        </div>
    )


}

export default Listadonombres;