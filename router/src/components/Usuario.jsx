import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom'

const Usuario = () => {
    const [usuario,setUsuario] = useState([])
    const {id} = useParams([])

    const obtenerUsuario = async() => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        console.log("res es : ",res)
        const users = await res.data
        setUsuario(users)
    }

    useEffect( ()=> {
        obtenerUsuario()
    },[])

  return (
    <div>
        <h2>Usuario</h2>
        <p>Nombre : {usuario.name} </p>
        <p>Email : {usuario.email} </p>
        <small>Telefono : {usuario.phone} </small>
    </div>
  );
}

export default Usuario;