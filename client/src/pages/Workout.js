import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import API from "../utils/API";
import { LOG_WORKOUT } from "../utils/actions";
import { useUserContext } from "../utils/GlobalState";
import ExerciseDisplay from "../components/ExerciseDisplay/ExerciseDisplay";


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
        
    },[]);

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
            <h1>Today's Workout:</h1>
            <form onSubmit={handleSubmit}>
                <label>Select Your Exercises for the day:</label>
                <br></br>
                <label>Exercise Type:</label>
                <select
                    type="text"
                    id="type"
                    required ref={typeRef}
                    onChange={e => setType(e.target.value)}>
                    <option>Cardio</option>
                    <option>Strength Training</option>
                </select>
                <br></br>
                {type === "Cardio" ?
                    <div>
                        <label>Exercise:</label>
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
                        <br></br>
                        <label>Time (minutes):</label>
                        <select
                            id="time"
                            required ref={timeRef}>
                            {time.map((value) => (
                                <option key={value} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                        <br></br>
                        <label>Distance (miles):</label>
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
                    :
                    <div>
                        <label>Exercise:</label>
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
                        <br></br>
                        <label>Sets:</label>
                        <select
                            id="sets"
                            required ref={setsRef}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </select>
                        <br></br>
                        <label>Reps:</label>
                        <select
                            id="reps"
                            required ref={repsRef}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                        </select>
                        <br></br>
                        <label>Weight (lbs):</label>
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
                        <br></br>
                        <label>Rest (seconds):</label>
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
                }
                <br></br>
                <button type="submit">Add Exercise!</button>
            </form>

            <div>
                
                <ul>
                    {displayExercise ? displayExercise.map(exercise => (
                            <div>
                            <ExerciseDisplay exercise={exercise}/>
                            </div>
                    )):
                    "Loading"}
                </ul>
            </div>


        </div >
    )
}
export default Workouts;