import { useContext } from "react";
import AppContext from "./AppContext";
import {useNavigate} from "react-router-dom";

function Login() {
    let [,setUser] = useContext(AppContext);
    let navigate = useNavigate();

    let handleLoginClick = (event) => {
        navigate("/");
    }

    let handleChangeEvent = (event) => {
        setUser(event.target.value);
    }

    return (
        <div>
            User name : <input onChange={handleChangeEvent} type="text"></input>
            <button onClick={handleLoginClick}>Login</button>
        </div>
    )
}

export default Login;