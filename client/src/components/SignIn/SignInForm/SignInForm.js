import React, { Component } from "react";
import "./SignInForm.css";

class SignInForm extends Component {
    render() {
        return (
            <div>
                <form>
                    <label>E-Mail:</label>
                    <input id="returnEmail"></input>
                    <label>Password</label>
                    <input id="returnPassword"></input>
                </form>
            </div>
        )
    }
}
export default SignInForm;
