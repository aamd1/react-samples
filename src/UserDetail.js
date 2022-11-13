import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function UserDetail() {

    let { username } = useParams();

    useEffect(() => {

        async function fetchData() {
            let response = await fetch("https://api.github.com/users/" + username);
            let data = await response.json();
            setUser(data);
        }

        fetchData();

    }, [username])

    const [user, setUser] = useState({});

    return (
        <>
            <Link to="/"> Back to list </Link>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <table style={{textAlign: "initial"}}>
                    <tbody>
                            {Object.keys(user).map(key => {
                                return <tr><td>{key}</td> <td>{user[key]}</td></tr>
                            })}
                    </tbody>
                </table>
            </div>
        </>);
}

export default UserDetail;