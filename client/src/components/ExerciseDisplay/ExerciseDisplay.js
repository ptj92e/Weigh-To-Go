import React, { useEffect, useState } from "react";
import API from "../../utils/API";

function ExerciseDisplay(props) {
    const [displayExercise, setDisplayExercise] = useState();

    // useEffect(() => {

    //     API.showExercise().then(exerciseData => {
    //         setDisplayExercise(exerciseData.data)
    //         console.log(exerciseData)
    //     })

    // }, []);

    console.log(props.exercise.type)
    return (
        <div>
            {props.exercise.type === "Cardio" ?
                <div>
                    Name - {props.exercise.exercise},
                    Time - {props.exercise.time} min,
                    Distance - {props.exercise.distance} miles
                </div> :
                <div>
                    Name - {props.exercise.exercise},
                    Sets - {props.exercise.sets},
                    Reps - {props.exercise.reps},
                    Weight - {props.exercise.weight} lbs,
                    Rest - {props.exercise.rest} sec
                </div>
            }

        </div>
    )

}
export default ExerciseDisplay;