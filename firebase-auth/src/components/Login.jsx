import React, {useState} from "react";
import {auth} from '../firebaseconfig'

const Login = () => {
    const[email,setEmail] = useState('')
    const[pass,setPass] = useState('')

    const RegistrarUsuario = (e)=>{
        e.preventDefault()
        try{
            auth.createUserWithEmailAndPassword(email,pass)
            alert('Usuario registrado')
        }catch (e){
            console.log(e)
        }
    }

    return (
        <div className="row mt-5">
            <div className="col"></div>
            <div className="col"></div>
            <form onSubmit={RegistrarUsuario} className="form-group">
                <input
                onChange={(e)=>{setEmail(e.target.value)}}
                    className="form-control"
                    placeholder="Introduce el Email"
                    type="text" />
                <input
                onChange={(e)=>{setPass(e.target.value)}}
                    className="form-control"
                    placeholder="Introduce el pass"
                    type="text" />
                <input
                    className="btn btn-dark btn-clock mt-4"
                    placeholder="Registrar usuario"
                    type="submit" />
            </form>
            <div className="col"></div>
        </div>
    )
}

export default Login