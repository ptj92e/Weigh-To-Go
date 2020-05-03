import React from "react";
import Navbar from "../components/Navbar/Navbar";
import NewMeal from "../components/NewMeal/NewMeal";
import "./css/Meal.css";

function Meals() {
    return (
        <div>
            <Navbar />
            <NewMeal />
        </div>
    )
}
export default Meals;