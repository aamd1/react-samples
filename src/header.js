import { useNavigate } from "react-router-dom"
import { useContext } from "react";
import AppContext from "./AppContext";

function Header() {

    let [user, setUser] = useContext(AppContext);

    let navigate = useNavigate();
    let handleLoginClick = () => {
        navigate("/login");
    }

    let handleLogoutClick = () => {
        setUser(null);
    }

    return (
        <div style={{display: "flex", "justifyContent": "space-between", padding: "5px"}}>
            <div>
                <a href="/" className="App-link">Home</a>
            </div>
            <div>
                {!user && <>Logged in as : Anonymous<button onClick={handleLoginClick}>Login?</button></>}
                {user && <>Logged in as : {user} <button onClick={handleLogoutClick}>Logout?</button></>}
            </div>
        </div>
    )
}

export default Header;