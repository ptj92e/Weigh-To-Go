import React from "react";
import "./SignInTitle.css";
import SignInForm from "../SignInForm/SignInForm";
import NewUserForm from "../NewUserForm/NewUserForm";

function SignInTitle() {
    return(
        <div id="signInTitle">
            <h1>Weigh To Go!</h1>
            <p>An App To Make Fitness Easy</p>
            <SignInForm />
            <NewUserForm />
        </div>
    )
}
export default SignInTitle;