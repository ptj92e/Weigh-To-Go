import React, { Component } from "react";
import "./SignInForm.css";
import SignInButton from "../SignInButton/SignInButton";

class SignInForm extends Component {
    render() {
        return (
            <div>
                <h3>Returning User? Sign in Here:</h3>
                <form>
                    <label>E-Mail:</label>
                    <input id="returnEmail"></input>
                    <label>Password</label>
                    <input id="returnPassword"></input>
                    <SignInButton />
                </form>
            </div>
        )
    }
}

export default SignInForm;