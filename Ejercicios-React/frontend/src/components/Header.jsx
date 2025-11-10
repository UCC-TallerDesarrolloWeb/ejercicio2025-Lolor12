import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const IsLoggedIn = localStorage.getItem("IsLoggedIn") === "true";
    
    const logout = () => {
        localStorage.removeItem("IsLoggedIn");
        navigate("/");
    }
    return(
        <header>
            <h1>GYM</h1>
            <nav>
                <a href="/">Home</a>
                { IsLoggedIn ?( 
                  <button onClick={logout}>Cerrar Sesion</button>  
                ):(
                    <a href="/login">Login</a>
                )}
                <a href="/actividades">Actividades</a>
            </nav>
        </header>
    )

}



export default Header;