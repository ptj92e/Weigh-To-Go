import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NewUserForm.css";

function NewUserForm() {

    const location = useLocation();    
    return (
        <div>
            <h3>If you are a new use, sign up here:</h3>
            <form>
                <label>Name</label>
                <input type="text" id="newName"></input>
                <label>E-Mail</label>
                <input type="text" id="newEmail"></input>
                <label>Password</label>
                <input type="text" id="newPassword"></input>
                <label>Confirm Password</label>
                <input type="text" id="confirmPassword"></input>
                <button><Link to="/newUser" className={location.pathname === "/newUser" ? "nav-link active" : "nav-link"}>Sign Up</Link></button>
            </form>
        </div>
    )
}

export default NewUserForm;