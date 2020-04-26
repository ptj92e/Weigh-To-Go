import React, { useState, useEffect, useRef } from "react";
import API from "../../utils/API";
import "./UpdateGoalWeight.css";

function UpdateGoalWeight(props) {
    const goalWeightRef = useRef();
    const weightLossRef = useRef();
    const [goalState, setGoalState] = useState({
        user: {}
    });

    const goalUser = () => {
        API.getUser()
            .then(result => {
                setGoalState({
                    user: result.data
                });
            });
    }

    useEffect(() => {
        goalUser()
    }, []);

    const handleGoals = e => {
        e.preventDefault();
        API.updateUser(goalState.user.id, {
            goal_weight: goalWeightRef.current.value,
            weight_loss: weightLossRef.current.value
        }).then(() => {
            goalUser();
        });
    }

    return (
        <div>
            <h3>What are your goals?</h3>
            <form onSubmit={handleGoals}>
                <p>Goal Weight: {goalState.user.goal_weight}</p>
                <p>If you would like to change your goal weight, enter that here:</p>
                <input
                    type="text"
                    required ref={goalWeightRef}
                />
                <p>How many pounds/week would you like to lose?</p>
                <select ref={weightLossRef}>
                    <option>0.5</option>
                    <option>1.0</option>
                    <option>1.5</option>
                    <option>2.0</option>
                </select>
                <button type="submit">Enter</button>
            </form>
            <p>You should achieve your goal in {props.calcWeightLoss(goalState)} weeks.</p>
        </div>
    )
}

export default UpdateGoalWeight;