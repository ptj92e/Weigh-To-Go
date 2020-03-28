import React from "react";
import SignInForm from "./SignInForm/SignInForm";
import SignInTitle from "./SignInTitle/SignInTitle";
import NewUserForm from "./NewUserForm/NewUserForm";

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