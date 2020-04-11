import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { useUserContext } from "../utils/GlobalState";
import { UPDATE_GOALWEIGHT } from "../utils/actions";
import "./Home.css";
import API from "../utils/API";

function Home() {
    const goalWeightRef = useRef();
    const weightLossRef = useRef()
    const [state, dispatch] = useUserContext();

    const handleSubmit = e => {
        e.preventDefault();
        API.updateGoal(state.email, {
            goal_weight: goalWeightRef.current.value
        }).then(result => {
            console.log(result);
            dispatch({
                type: UPDATE_GOALWEIGHT,
                goalWeight: result.data
            });
        }).then(() => calcWeightLoss);
    }

    const calcWeightLoss = (goalWeightRef, weightLossRef, state) => {
        if (goalWeightRef < state.currentWeight) {
            switch (weightLossRef) {
                case .5:
                    return (state.currentWeight * 3500 - state.goalWeight * 3500) / 1750;
                case 1:
                    return (state.currentWeight * 3500 - state.goalWeight * 3500) / 3500;
                case 1.5:
                    return (state.currentWeight * 3500 - state.goalWeight * 3500) / 5250;
                case 2:
                    return (state.currentWeight * 3500 - state.goalWeight * 3500) / 7000;
            }
        } else {
            switch (weightLossRef) {
                case .5:
                    return (state.currentWeight * 3500 + state.goalWeight * 3500) / 1750;
                case 1:
                    return (state.currentWeight * 3500 + state.goalWeight * 3500) / 3500;
                case 1.5:
                    return (state.currentWeight * 3500 + state.goalWeight * 3500) / 5250;
                case 2:
                    return (state.currentWeight * 3500 + state.goalWeight * 3500) / 7000;
            }
        }
    }

    return (
        <div>
            <Navbar />
            <div id="home">
                <h1>Welcome {state.name}!</h1>
                <div>
                    <h3>Here is your information:</h3>
                    <p>Age: {state.age}</p>
                    <p>Weight: {state.currentWeight}</p>
                </div>
                <div>
                    <h3>What are your goals?</h3>
                    <form onSubmit={handleSubmit}>
                        <p>Goal Weight: {state.goalWeight}</p>
                        <p>If you would like to change your goal weight, enter that here:</p>
                        <input
                            type="text"
                            required ref={goalWeightRef}
                        />
                        <p>How many pounds/week would you like to lose?</p>
                        <select ref={weightLossRef}>
                            <option>.5</option>
                            <option>1</option>
                            <option>1.5</option>
                            <option>2</option>
                        </select>
                        <button type="submit">Enter</button>
                    </form>
                    <p>You should achieve your goal in {state.name} weeks.</p>
                </div>
            </div>
        </div>
    )
}
export default Home;