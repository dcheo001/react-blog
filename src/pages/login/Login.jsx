import "./login.css"
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login({author, setAuthor, user, setUser}) {
    const [emailForm, setEmailForm] = useState('Enter your Email...')
    const [nameForm, setNameForm] = useState('Enter your Name...')
    function loginAttempt(e) {
        e.preventDefault();
        fetch("http://localhost:9292/authors", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            author_name: nameForm,
            email: emailForm
          }),
        })
          .then((r) => r.json())
          .then((loggedInUser) => setAuthor(loggedInUser))
          .then(setUser(true))
      }
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form action="" className="loginForm">
                <label>Email</label>
                <input type="text" className="loginInput" placeholder="Enter your Email..." onChange={(e=>setEmailForm(e.target.value))} ></input>
                <label>Name</label>
                <input type="text" className="loginInput" placeholder="Enter your name..." onChange={(e=>setNameForm(e.target.value))}></input>
                <button className="loginButton" onClick={loginAttempt}>Login</button>
            </form>
            <button className="loginRegisterButton">Register</button>
            <Link className="link" to="/register">Register</Link>
        </div>
    )
}
