import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";

function Workouts() {
    const [exercise, setExercise] = useState([]);

    useEffect(() => {
        async function getExercise() {
            const response = await fetch("https://my-json-server.typicode.com/ptj92e/Weigh-To-Go/exercise");
            const body = await response.json();
            console.log(body[0].name);
            setExercise(body.map(({ name }) => ({ label: name, value: name })));
          }
          getExercise();
        }, []);
      
      
    return (
        <div>
            <Navbar />
            <h1>Today's Workout:</h1>
            <select>
                {exercise.map(({ label, value }) => (
                    <option key={value} value={value}>
                        {label}
                    </option>
                ))}
            </select>
        </div >
    )
}
export default Workouts;