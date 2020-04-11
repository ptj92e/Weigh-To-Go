import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { useUserContext } from "../utils/GlobalState";
import { UPDATE_GOALWEIGHT, UPDATE_WEIGHT } from "../utils/actions";
import "./Home.css";
import API from "../utils/API";

function Home() {
    const weightRef = useRef();
    const goalWeightRef = useRef();
    const weightLossRef = useRef();
    const [state, dispatch] = useUserContext();

    const handleGoals = e => {
        e.preventDefault();
        API.updateUser(state.email, {
            goal_weight: goalWeightRef.current.value,
            weight_loss: weightLossRef.current.value
        }).then(result => {
            console.log(result.config.data);
            dispatch({
                type: UPDATE_GOALWEIGHT,
                goalWeight: JSON.parse(result.config.data)
            });
        });
    }

    const updateWeight = e => {
        e.preventDefault();
        API.updateUser(state.email, {
            weight: weightRef.current.value
        }).then(result => {
            dispatch({
                type: UPDATE_WEIGHT,
                weight: JSON.parse(result.config.data)
            });
        });
    }

    const calcWeightLoss = (state) => {
        if (state.goalWeight < state.currentWeight) {
            switch (state.weightLoss) {
                case 0.5:
                    return (state.currentWeight * 3500 - state.goalWeight * 3500) / 1750;
                case 1.0:
                    return (state.currentWeight * 3500 - state.goalWeight * 3500) / 3500;
                case 1.5:
                    return (state.currentWeight * 3500 - state.goalWeight * 3500) / 5250;
                case 2.0:
                    return (state.currentWeight * 3500 - state.goalWeight * 3500) / 7000;
            }
        } else if (state.goalWeight > state.currentWeight) {
            switch (state.weightLoss) {
                case 0.5:
                    return (state.goalWeight * 3500 - state.currentWeight * 3500) / 1750;
                case 1.0:
                    return (state.goalWeight * 3500 - state.currentWeight * 3500) / 3500;
                case 1.5:
                    return (state.goalWeight * 3500 - state.currentWeight * 3500) / 5250;
                case 2.0:
                    return (state.goalWeight * 3500 - state.currentWeight * 3500) / 7000;
            }
        } else {
            return 0;
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
                    <form onSubmit={updateWeight}>
                        <label>Time to check in! What is your weight today?</label>
                        <input 
                            type="text"
                            required ref={weightRef}
                        />
                        <button>Update Weight</button>
                    </form>
                </div>
                <div>
                    <h3>What are your goals?</h3>
                    <form onSubmit={handleGoals}>
                        <p>Goal Weight: {state.goalWeight}</p>
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
                    <p>You should achieve your goal in {calcWeightLoss(state)} weeks.</p>
                </div>
            </div>
        </div>
    )
}
export default Home;