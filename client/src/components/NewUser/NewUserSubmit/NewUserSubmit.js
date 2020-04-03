import React from "react";
import { Link } from "react-router-dom";

function NewUserSubmit() {
    return (
        <button><Link to="/new_user">Submit</Link></button>
    );
};

export default NewUserSubmit;