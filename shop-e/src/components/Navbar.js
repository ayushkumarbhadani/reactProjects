import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css";
const Navbar = ({ user }) => {
    const [isUserLogin, setIsUserLogin] = useState(false);
    useEffect(() => {
        console.log("user changed..");
        if (user) {
            setIsUserLogin(true);
        }
        else {
            setIsUserLogin(false);
        }
    }, [user]);

    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            {!isUserLogin && <NavLink to="/login">Login</NavLink>}
            {isUserLogin && <NavLink to="/logout">Logout</NavLink>}
        </nav>
    );
}
export default Navbar;