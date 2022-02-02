import React, {useState} from "react";

export const Formulario = () => {

    const [nombre, setNombre] = useState('')
    const [edad, setEdad] = useState('')

    const Validar = (event) =>{
        event.preventDefault()
        console.log('Pulsado el boton')
        if(!nombre.trim()){
            console.log('El nombre esta vacio')
            return
        }
        if(!edad.trim()){
            console.log('La edad esta vacio')
            return
        }
    }

    return (
        <div>
            <form onSubmit={Validar} className="form-group">
                <input 
                    placeholder="Introduce el nombre" 
                    className="form-control" 
                    type="text"
                    onChange={ (e) => {setNombre(e.target.value)}}
                />
                <input 
                    placeholder="Introduce edad"
                    className="form-control"
                    type="text"
                    onChange={ (e) => {setEdad(e.target.value)}}
                    />
                <input className="btn btn-info btn-block" type="submit" />
            </form>
        </div>
    )
}

export default Formulario