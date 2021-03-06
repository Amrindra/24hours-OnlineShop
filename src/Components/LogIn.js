import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../allStyles/LogIn.css";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";

function LogIn() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        history("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (event) => {
    event.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        history("/");
      })
      .catch((error) =>
        alert(
          "Please use fake email and password then hit create account if you are first time using this site."
        )
      );
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          // src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          src="https://img.icons8.com/office/100/000000/last-24-hours.png"
          alt=""
          className="login__logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail </h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <button onClick={login} type="submit" className="login__signInButton">
            Sign in
          </button>
          <p>
            By continuing, you agree to 24hours Online Shop's Conditions of Use
            and Privacy Notice.
          </p>
          <button onClick={register} className="login__registerButton">
            Create your 24hours Online Shop Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
