import { useState, useNavigation } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
const Login = ({ setUser }) => {
    const navigate = useNavigate();
    const [tempUserEmail, setTempUserEmail] = useState();
    const [tempUserPassword, setTempUSerPassword] = useState();
    const loginUser = (e, setUser) => {
        e.preventDefault();
        if (tempUserEmail !== "test" && tempUserPassword !== "Test1234") return;

        setUser({ email: tempUserEmail, name: "Demo User" })
        navigate('/dashboard');
        return;
    }
    return (
        <section className="form-wrapper">
            <form className="login-form" onSubmit={(e) => loginUser(e, setUser)}>
                <h1 className="login-form-heading">Login</h1>
                <label>Email:
                    <input type="text" placeholder="Enter Your Email" onChange={(e) => setTempUserEmail(e.target.value)} />
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