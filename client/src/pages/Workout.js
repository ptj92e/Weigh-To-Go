import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import WorkoutForm from "../components/WorkoutForm/WorkoutForm";
import "./css/Workout.css"

function Workouts() {
    return (
        <div>
            <Navbar />
            <div id="workout">
                <h1 id="WorkoutHeader" className="center">Today's Workout:</h1>
                <WorkoutForm />
            </div>
        </div >
    )
}
export default Workouts;