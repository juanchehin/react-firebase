import React, {Fragment} from "react";

function Hola(){
    let saludo = "hola que tal"
    return(
        <Fragment>
            <h1>Primer component Hola {saludo}</h1>
            <p>Saludo desde la funcion hola en hola.jsx</p>
        </Fragment>
    )
}

export default Hola