import React from "react";
import { Link } from "react-router-dom";

function NewUserButton() {
    return (
        <button><Link to="/newUser">Sign Up</Link></button>
    );
};

export default NewUserButton;