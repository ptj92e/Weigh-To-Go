import React from "react";
import "./MealDisplay.css";

function MealDisplay(props) {
    return (
        <div>
            <table className="table">
                <thead>
                    <th className="col-2">Name</th>
                    <th className="col-2">Calories</th>
                    <th className="col-2">Carbs</th>
                    <th className="col-2">Protein</th>
                    <th className="col-2">Fat</th>
                </thead>
                {props.meal.map(meal => (
                    <tbody>
                        <th className="col-2">{meal.meal}</th>
                        <th className="col-2">{meal.calories}</th>
                        <th className="col-2">{meal.carbs}</th>
                        <th className="col-2">{meal.protein}</th>
                        <th className="col-2">{meal.fat}</th>
                    </tbody>
                ))}
            </table>
        </div>
    )
}

export default MealDisplay;