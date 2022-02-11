import React from "react";

const Login = () => {
    return (
        <div className="row mt-5">
            <div className="col"></div>
            <div className="col"></div>
            <form className="form-group">
                <input
                    className="form-control"
                    placeholder="Introduce el Email"
                    type="text" />
                <input
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