import "./login.css"
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form action="" className="loginForm">
                <label>Email</label>
                <input type="text" className="loginInput" placeholder="Enter your email..."></input>
                <label>Password</label>
                <input type="password" className="loginInput" placeholder="Enter your password..."></input>
                <button className="loginButton">Login</button>
            </form>
            <button className="loginRegisterButton">Register</button>
            <Link className="link" to="/register">Register</Link>
        </div>
    )
}
