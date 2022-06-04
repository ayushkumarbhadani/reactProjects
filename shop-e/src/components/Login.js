import { useState, useNavigation } from "react";
import "./login.css";
const Login = ({ setUser, user }) => {
    const [isLoggedIn, setIsLoggedIn] = useState()
    const [tempUserId, setTempUserId] = useState();
    const [tempUserPassword, setTempUSerPassword] = useState();
    const loginUser = (e, setUser) => {
        e.preventDefault();
        if (tempUserId === "test" && tempUserPassword === "Test1234") {
            setUser({ name: "Test User", id: "1" });
            return;
        }
        else {
            alert("Incorrect Email or Password");
        }
    }
    if (user) {
        // useNavigation("/");
        alert("User LoggedIn");
    }
    return (
        <section className="form-wrapper">
            <form className="login-form" onSubmit={(e) => loginUser(e, setUser)}>
                <h1 className="login-form-heading">Login</h1>
                <label>Email:
                    <input type="text" placeholder="Enter Your Email" onChange={(e) => setTempUserId(e.target.value)} />
                </label>
                <label> Password:
                    <input type="password" placeholder="Enter Your Password" onChange={(e) => setTempUSerPassword(e.target.value)} />
                </label>
                <div>
                    <input type="submit" value="Login" className="primary-btn submit-btn" />
                </div>
            </form>
        </section>
    );


}

export default Login;