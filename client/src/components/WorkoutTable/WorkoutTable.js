import React, { useState, useEffect } from "react";
import ExerciseDisplay from "../ExerciseDisplay/ExerciseDisplay"
import API from "../../utils/API";
import "./WorkoutTable.css";

function WorkoutTable(props) {
    return (
        <div className="center">
            <h3 className="center">Past Exercises: </h3>
            <ul>
                {props.exerciseArray ? props.exerciseArray.map(exercise => (
                    <div>
                        <ExerciseDisplay exercise={exercise} />
                    </div>
                )) :
                    "Loading..."}
            </ul>
        </div>
    )
}

export default WorkoutTable;