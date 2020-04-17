import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import "./ExerciseDisplay.css";

function ExerciseDisplay(props) {

    console.log(props.exercise.type)
    return (
        <div>
            {props.exercise.type === "Cardio" ?
                <table className="table">
                    <thead>
                        <tr>
                            <th className="col-2">Exercise</th>
                            <th className="col-2">Time (min)</th>
                            <th className="col-2">Distance (miles)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="active">
                            <td className="col-2">{props.exercise.exercise}</td>
                            <td className="col-2">{props.exercise.time}</td>
                            <td className="col-2">{props.exercise.distance}</td>
                        </tr>
                    </tbody>
                </table> :
                // {props.exercise.type === "Cardio" ?
                //     <div>
                //         Name - {props.exercise.exercise},
                //         Time - {props.exercise.time} min,
                //         Distance - {props.exercise.distance} miles
                //     </div> :
                <table className="table">
                    <thead>
                        <tr>
                            <th className="col-2">Exercise</th>
                            <th className="col-2">Sets</th>
                            <th className="col-2">Reps</th>
                            <th className="col-2">Weight</th>
                            <th className="col-2"> Rest</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="active">
                            <td className="col-2">{props.exercise.exercise}</td>
                            <td className="col-2">{props.exercise.sets}</td>
                            <td className="col-2">{props.exercise.reps}</td>
                            <td className="col-2">{props.exercise.weight}</td>
                            <td className="col-2">{props.exercise.rest}</td>
                        </tr>
                    </tbody>
                </table>
                // <div>
                //     Name - {props.exercise.exercise},
                //     Sets - {props.exercise.sets},
                //     Reps - {props.exercise.reps},
                //     Weight - {props.exercise.weight} lbs,
                //     Rest - {props.exercise.rest} sec
                // </div>
            }

        </div>
    )

}
export default ExerciseDisplay;