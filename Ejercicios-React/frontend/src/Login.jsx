import { useState }  from "react";

const Login = () => {
    const [usuario, setUsuario] = useState(" ");
    const [password, setPassword] = useState(" ");

    const handlerLogin = async (e) => {
        e.preventDefault();

        if(usuario==="admin" && password==="admin"){
            console.log("Login OK");
        }else{
            console.log("Error");
        }
    }

    return(
        <div className="login-container">
            <form className="login-form" onSubmit={handlerLogin}>
                <h2>Iniciar Sesion</h2>
                <label htmlFor="usuario">Usuario:</label>
                <input id="usuario" type="text" placeholder="Usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)}
                required />
                <label htmlFor="password">Password:</label>    
                <input id="password" type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} 
                required />

                <button type="sumbit">Ingresar</button>

            </form>
        </div>
    )
}

export default Login;