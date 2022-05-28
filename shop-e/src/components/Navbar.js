import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
        </nav>
    );
}
export default Navbar;