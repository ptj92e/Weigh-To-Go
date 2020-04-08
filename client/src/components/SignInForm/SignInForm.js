import React, { useRef } from "react";
import "./SignInForm.css";
import { Link } from "react-router-dom";

function SignInForm() {
    return (
        <div id="signIn">
            <h3>Returning User? Sign in Here:</h3>
            <form>
                <div className="column col-12">
                    <label>E-Mail:</label>
                    <input id="returnEmail"></input>
                    <label>Password:</label>
                    <input id="returnPassword"></input>
                </div>
                <button><Link to="/home">Sign In</Link></button>
            </form>
        </div>
    )
}

export default SignInForm;