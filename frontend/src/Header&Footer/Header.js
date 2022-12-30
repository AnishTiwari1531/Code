import React from "react";
import { Link, useNavigate } from "react-router-dom"

const Header = () => {
    const data = localStorage.getItem("user");
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/')
    }

    return (
        <div>
            <img
                alt="logo"
                className="logo"
                src="https://coderythm.com/wp-content/uploads/2021/07/logo-cr-white.png" />
            {
                data ? <ul className="nav-ul nav-right">
                    <li><Link onClick={logout} to="/login">Welcome {data && JSON.parse(data).user} &nbsp; To code Rythm! &nbsp; Logout</Link></li>
                </ul>
                    :
                    <ul className="nav-ul nav-right">
                        <li><Link to="/signup">Sign Up</Link></li>
                        <li><Link to="/login">Sign In</Link></li>
                    </ul>
            }
        </div>
    )
}

export default Header;
