import React from "react";
import SignInForm from "../components/SignInForm/SignInForm";
import SignInTitle from "../components/SignInTitle/SignInTitle";
import NewUserForm from "../components/NewUserForm/NewUserForm";
import "./SignIn.css";

function SignIn() {
    return (
        <div>
            <SignInTitle />
            <div id="formsDiv">
                <SignInForm />
                <NewUserForm />
            </div>
        </div>
    );
};
export default SignIn;