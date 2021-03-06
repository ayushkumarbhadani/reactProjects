import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaHome, FaListUl, FaUserCircle } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

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
            <NavLink to="/">
                <span className="mobile-nav-name">Home</span>
                <span className="mobile-nav-icon"><FaHome /></span>
            </NavLink>
            <NavLink to="/products">
                <span className="mobile-nav-name">Products</span>
                <span className="mobile-nav-icon"><FaListUl /></span>
            </NavLink>
            {!isUserLogin && <NavLink to="/login">
                <span className="mobile-nav-name">Login</span>
                <span className="mobile-nav-icon"><FaUserCircle /></span>
            </NavLink>}
            {isUserLogin && <NavLink to="/logout">
                <span className="mobile-nav-name">Logout</span>
                <span className="mobile-nav-icon"><FaUserCircle /></span>
            </NavLink>}
            <form className="mobile-nav-name nav-search-form">
                <input type="search" className="nav-search" />
                <button type="submit" >Search</button>
            </form>
            <NavLink to="/cart"><FiShoppingCart/></NavLink>
        </nav>
    );
}
export default Navbar;