import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

    return (
        <header className="navbar">
            <section className="navbar-section">
                <Link to="/home">Weigh To Go!</Link>
                <Link to="/workouts">Workouts</Link>
                <Link to="/meals">Meals</Link>
                <Link to="/account">Manage Account</Link>
            </section>
        </header>
    )
}
export default Navbar;