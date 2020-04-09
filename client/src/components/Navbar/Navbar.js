import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {

    return (
        <header className="navbar">
            <nav>
                <Link to="/home">Weigh To Go!</Link>
                <div className="navbar-section">
                    <Link to="/workouts">Workouts</Link>
                    <Link to="/meals">Meals</Link>
                    <Link to="/account">Manage Account</Link>
                </div>
            </nav>
        </header>
    )
}
export default Navbar;