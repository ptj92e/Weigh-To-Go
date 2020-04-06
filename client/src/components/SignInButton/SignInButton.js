import React from "react";
import { Link } from "react-router-dom";

function SignInButton() {
    return (
        <button><Link to="/home">Sign In</Link></button>
    );
};

export default SignInButton;