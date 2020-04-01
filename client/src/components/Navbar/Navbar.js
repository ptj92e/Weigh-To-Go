import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

    return (
        <header class="navbar">
            <section class="navbar-section">
                <a class="navbar-brand mr-2"><Link to="/home">Weigh To Go!</Link></a>
                <a href="..." class="btn btn-link"><Link to="/workouts">Workouts</Link></a>
                <a href="..." class="btn btn-link"><Link to="/meals">Meals</Link></a>
            </section>
        </header>
    )
}
export default Navbar;