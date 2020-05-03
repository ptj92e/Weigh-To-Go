import React, { useState, useEffect, useRef } from "react";
import UpdateGoalWeight from "../UpdateGoalWeight/UpdateGoalWeight";
import API from "../../utils/API";
import "./UpdateWeight.css";

function UpdateWeight(props) {
    const weightRef = useRef();
    const [weightState, setWeightState] = useState({
        user: {}
    });

    const weightUser = () => {
        API.getUser()
            .then(result => {
                setWeightState({
                    user: result.data
                });
            });
    };

    useEffect(() => {
        weightUser()
    }, []);

    const updateWeight = e => {
        e.preventDefault();
        API.updateUser(weightState.user.id, {
            weight: weightRef.current.value
        }).then(() => {
            weightUser();
        });
    }

    return (
        <div>
            <div>
                <h3>Here is your information:</h3>
                <p>Age: {weightState.user.age}</p>
                <p>Weight: {weightState.user.weight}</p>
                <form onSubmit={updateWeight}>
                    <label>Time to check in! What is your weight today?</label>
                    <input
                        type="text"
                        required ref={weightRef}
                    />
                    <button>Update</button>
                </form>
            </div>
            <UpdateGoalWeight 
                calcWeightLoss={props.calcWeightLoss}
            />
        </div>
    )
}

export default UpdateWeight;