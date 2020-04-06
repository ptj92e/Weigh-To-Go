import React from "react";
import SignInForm from "../components/SignInForm/SignInForm";
import SignInTitle from "../components/SignInTitle/SignInTitle";
import NewUserForm from "../components/NewUserForm/NewUserForm";

function SignIn() {
    return(
        <div>
            <SignInForm />
            <SignInTitle />
            <NewUserForm />
        </div>
    );
};
export default SignIn;