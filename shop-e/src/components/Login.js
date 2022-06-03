import "./login.css";
const Login = () => {
    return (
        <section className="form-wrapper">
            <form>
                <label for="email">Email
                    <input type="text" placeholder="Email" />
                </label>
                <label> Password
                    <input type="password" placeholder="password" />
                </label>
            </form>
        </section>
    );
}

export default Login;