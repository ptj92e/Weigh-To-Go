import React from "react";
import "./SignInForm.css";
import { Link, useLocation } from "react-router-dom";

function SignInForm() {

    const location = useLocation();

    return (
        <div>
            <h3>Returning User? Sign in Here:</h3>
            <form>
                <label>E-Mail:</label>
                <input id="returnEmail"></input>
                <label>Password</label>
                <input id="returnPassword"></input>
                <button><Link to="/home" className={location.pathname === "/home" ? "nav-link active" : "nav-link"}>Sign In</Link></button>
            </form>
        </div>
    )
}

export default SignInForm;