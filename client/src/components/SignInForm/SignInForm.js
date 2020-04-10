import React, { useState, useRef } from "react";
import { Redirect } from "react-router-dom";
import API from "../../utils/API";
import "./SignInForm.css";

function SignInForm() {
    const emailRef = useRef();
    const passRef = useRef();
    const [signInState, setSignInState] = useState({
        signInHome: false
    });

    const handleSubmit = e => {
        e.preventDefault();
        API.login({
            email: emailRef.current.value,
            password: passRef.current.value
        }).then(result => {console.log(result.data)});
    };

    if (signInState.signInHome === true) {
        return <Redirect to="/home" />;
    } else {
        return (
            <div id="signIn">
                <h3>Returning User? Sign in Here:</h3>
                <form onSubmit={handleSubmit}>
                    <div className="column col-12">
                        <label>E-Mail:</label>
                        <input 
                            type="text"
                            id="returnEmail"
                            required ref={emailRef}></input>
                        <label>Password:</label>
                        <input 
                            type="password"
                            id="returnPassword"
                            required ref={passRef}></input>
                    </div>
                    <button type="submit">Sign In</button>
                </form>
            </div>
        );
    };
};

export default SignInForm;