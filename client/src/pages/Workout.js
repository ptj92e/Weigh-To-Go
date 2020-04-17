import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import API from "../utils/API";
import { LOG_WORKOUT } from "../utils/actions";
import { useUserContext } from "../utils/GlobalState";
import ExerciseDisplay from "../components/ExerciseDisplay/ExerciseDisplay";
import "./Workout.css"

function Workouts() {
    const [exercise, setExercise] = useState([]);
    const [type, setType] = useState("Cardio");
    const [displayExercise, setDisplayExercise] = useState();
    const typeRef = useRef();
    const exerciseRef = useRef();
    const setsRef = useRef();
    const repsRef = useRef();
    const weightRef = useRef();
    const restRef = useRef();
    const timeRef = useRef();
    const distanceRef = useRef();
    const [state, dispatch] = useUserContext();


    useEffect(() => {

        API.showExercise().then(exerciseData => {
            setDisplayExercise(exerciseData.data)
            console.log(exerciseData)
        })

    }, [state]);

    useEffect(() => {
        async function getExercise() {
            // const response = await fetch("https://wger.de/api/v2/exercise/?language=2");
            const response = await fetch("https://my-json-server.typicode.com/ptj92e/Weigh-To-Go/exercise");
            const body = await response.json();
            // console.log(body);
            setExercise(body.map(({ name, type }) => ({ label: name, value: name, type: type })));
        }
        getExercise();
    }, []);

    // console.log(exercise.filter(exerciseC => exerciseC.type === "Cardio"));

    const sets = [];
    for (let i = 0; i <= 10; i += 1) {
        sets.push(i);
    }

    const reps = [];
    for (let i = 0; i <= 20; i += 1) {
        reps.push(i);
    }

    const weights = [];
    for (let i = 5; i <= 1000; i += 5) {
        weights.push(i);
    }

    const rests = [];
    for (let j = 0; j <= 300; j += 10) {
        rests.push(j);
    }

    const time = [];
    for (let k = 0; k <= 300; k += 1) {
        time.push(k);
    }

    const distance = [];
    for (let l = 0; l <= 26; l += .25) {
        distance.push(l);
    }

    // console.log(type)
    const handleSubmit = e => {
        e.preventDefault();
        if (type === "Cardio") {
            API.logWorkout({
                type: typeRef.current.value,
                exercise: exerciseRef.current.value,
                // sets: setsRef.current.value,
                // reps: repsRef.current.value,
                // weight: weightRef.current.value,
                // rest: restRef.current.value,
                time: timeRef.current.value,
                distance: distanceRef.current.value
            }).then(result => {
                dispatch({
                    type: LOG_WORKOUT,
                    logWorkout: result.data
                });
                // console.log(typeRef.current.value)
            });
        } else
            API.logWorkout({
                type: typeRef.current.value,
                exercise: exerciseRef.current.value,
                sets: setsRef.current.value,
                reps: repsRef.current.value,
                weight: weightRef.current.value,
                rest: restRef.current.value,
                // time: timeRef.current.value,
                // distance: distanceRef.current.value
            }).then(result => {
                dispatch({
                    type: LOG_WORKOUT,
                    logWorkout: result.data
                });
                // console.log(typeRef.current.value)
            });
    }

    return (
        <div>
            <Navbar />
            <div id="workout">
                <h1 id="WorkoutHeader" className="center">Today's Workout:</h1>
                <form onSubmit={handleSubmit}>
                    <div className="center">
                        <label className="center">Select Your Exercises for the day:</label>
                        <br></br>
                        <label className="center">Exercise Type:</label>
                        <br></br>
                        <select
                            type="text"
                            id="type"
                            required ref={typeRef}
                            onChange={e => setType(e.target.value)}>
                            <option>Cardio</option>
                            <option>Strength Training</option>
                        </select>
                    </div>
                    <br></br>
                    <div>
                        {type === "Cardio" ?
                            <div className="columns oneline center">
                                <div className="col-md-12 col-5">
                                    <label className="">Exercise: </label>
                                    <br></br>
                                    <select
                                        required ref={exerciseRef}>
                                        {exercise
                                            .filter(exercise => exercise.type === "Cardio")
                                            .map(({ label, value }) => (
                                                <option key={value} value={value}>
                                                    {label}
                                                </option>
                                            ))}
                                    </select>
                                </div>
                                <br></br>
                                <div className="col-md-12 col-3">
                                    <label>Time (minutes):  </label>
                                    <br></br>
                                    <select
                                        id="time"
                                        required ref={timeRef}>
                                        {time.map((value) => (
                                            <option key={value} value={value}>
                                                {value}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <br></br>
                                <div className="col-md-12 col-4">
                                    <label>Distance (miles): </label>
                                    <br></br>
                                    <select
                                        id="distance"
                                        required ref={distanceRef}>
                                        {distance.map((value) => (
                                            <option key={value} value={value}>
                                                {value}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            :
                            <div className="columns oneline center">
                                <div className="col-lg-12 col-4">
                                    <label>Exercise:</label>
                                    <br></br>
                                    <select
                                        required ref={exerciseRef}>
                                        {exercise
                                            .filter(exercise => exercise.type === "Strength Training")
                                            .map(({ label, value }) => (
                                                <option key={value} value={value}>
                                                    {label}
                                                </option>
                                            ))}
                                    </select>
                                </div>
                                <br></br>
                                <div className="col-lg-12 col-1">
                                    <label>Sets:</label>
                                    <br></br>
                                    <select
                                        id="sets"
                                        required ref={setsRef}>
                                        {sets.map((value) => (
                                            <option key={value} value={value}>
                                                {value}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <br></br>
                                <div className="col-lg-12 col-2">
                                    <label>Reps:</label>
                                    <br></br>
                                    <select
                                        id="reps"
                                        required ref={repsRef}>
                                        {reps.map((value) => (
                                            <option key={value} value={value}>
                                                {value}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <br></br>
                                <div className="col-lg-12 col-3">
                                    <label>Weight (lbs):</label>
                                    <br></br>
                                    <select
                                        id="weight"
                                        required ref={weightRef}>
                                        <option>0 or Bodyweight</option>
                                        {weights.map((value) => (
                                            <option key={value} value={value}>
                                                {value}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <br></br>
                                <div className="col-lg-12 col-2">
                                    <label>Rest (sec):</label>
                                    <br></br>
                                    <select
                                        id="rest"
                                        required ref={restRef}>
                                        {rests.map((value) => (
                                            <option key={value} value={value}>
                                                {value}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        }
                    </div>
                    <br></br>
                    <div className="center">
                        <button type="submit">Add Exercise!</button>
                    </div>
                </form>
                <br></br>
                <div className="center">
                    <h3 className="center">Past Exercises: </h3>
                    <ul>
                        {displayExercise ? displayExercise.map(exercise => (
                            <div>
                                <ExerciseDisplay exercise={exercise} />
                            </div>
                        )) :
                            "Loading..."}
                    </ul>
                </div>

            </div>
        </div >
    )
}
export default Workouts;