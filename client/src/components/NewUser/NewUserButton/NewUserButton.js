import React from "react";
import { Link } from "react-router-dom";

function NewUserButton() {
    return (
        <button><Link to="/sign_up">Sign Up</Link></button>
    );
};

export default NewUserButton;