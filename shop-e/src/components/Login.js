import { useState, useNavigation } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
const Login = ({ setUser }) => {
    const navigate = useNavigate();
    const [tempUserEmail, setTempUserEmail] = useState();
    const [tempUserPassword, setTempUSerPassword] = useState();
    const [isUserNameCorrect, setIsUserNameCorrect] = useState(true);
    const loginUser = (e, setUser) => {
        e.preventDefault();
        if (tempUserEmail !== "demo@example.com" && tempUserPassword !== "demo") {
            setIsUserNameCorrect(false);
            return;
        }

        setUser({ email: tempUserEmail, name: "Demo User" })
        navigate('/dashboard');
        return;
    }
    return (
        <section className="form-wrapper">
            <form className="login-form" onSubmit={(e) => loginUser(e, setUser)}>
                <h1 className="login-form-heading">Login</h1>
                <label>Email:
                    <input type="text" placeholder="Enter Your Email" onChange={(e) => setTempUserEmail(e.target.value)} className={!isUserNameCorrect ? "incorrect-auth" : null} />

                </label>
                <label> Password:
                    <input type="password" placeholder="Enter Your Password" onChange={(e) => setTempUSerPassword(e.target.value)} className={!isUserNameCorrect ? "incorrect-auth" : null} />
                </label>
                {!isUserNameCorrect && <p>
                    <span className="incorrect-auth-alert">Incorrect Email or Password</span>
                </p>}
                <div>
                    <input type="submit" value="Login" className="primary-btn submit-btn" />
                </div>

            </form>
            <p className="demo-notice">
                This is a demo react application. You can login into demo account using:
                <br />
                <br />
                <strong>Email: demo@example.com</strong>
                <br />
                <br />
                <strong>Password: demo</strong>
            </p>
        </section >
    );


}

export default Login;