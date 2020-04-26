import React, { useState, useRef } from "react";
import { Redirect } from "react-router-dom";
import { useUserContext } from "../utils/GlobalState";
import { UPDATE_NEWUSER } from "../utils/actions";
import API from "../utils/API";
import "./css/NewUser.css";

function NewUser() {
    const ageRef = useRef();
    const genderRef = useRef();
    const feetRef = useRef();
    const inchesRef = useRef();
    const weightRef = useRef();
    const goalWeightRef = useRef();
    const weightLossRef = useRef();
    const [state, dispatch] = useUserContext();
    const [userInfoState, setUserInfoState] = useState({
        toHome: false
    });

    const handleSubmit = e => {
        e.preventDefault();
        API.updateUser(state.email, {
            age: ageRef.current.value,
            gender: genderRef.current.value,
            height: feetRef.current.value + inchesRef.current.value,
            weight: weightRef.current.value,
            goal_weight: goalWeightRef.current.value,
            weight_loss: weightLossRef.current.value
        }).then(result => {
            console.log(JSON.parse(result.config.data));
            dispatch({
                type: UPDATE_NEWUSER,
                updateNewUser: JSON.parse(result.config.data)
            })
        }).then(setUserInfoState({
            toHome: true
        }));
    };

    if (userInfoState.toHome === true) {
        return <Redirect to="/home" />
    } else {
        return (
            <div id="newUser">
                <h3>Welcome {state.name}! Tell us a little about yourself:</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>What is your Age?</label>
                        <input
                            type="text"
                            id="age"
                            required ref={ageRef}
                        />
                        <label>What is your Gender?</label>
                        <select
                            id="gender" className="form-select"
                            required ref={genderRef}>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>
                    <div>
                        <label>What is your height in feet and inches?</label>
                        <select
                            id="feet" className="form-select"
                            required ref={feetRef}>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                        </select>
                        <select
                            id="inches" className="form-select"
                            required ref={inchesRef}>
                            <option>0</option>
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
                        </select>
                    </div>
                    <div>
                        <label>What is your current weight?</label>
                        <input
                            type="text"
                            id="currentWeight"
                            required ref={weightRef}
                        />
                    </div>
                    <div>
                        <label>What is your goal weight?</label>
                        <input
                            type="text"
                            id="goalWeight"
                            required ref={goalWeightRef}
                        />
                    </div>
                    <div>
                        <label>How many pounds would you like to lose /week?</label>
                        <select ref={weightLossRef}>
                            <option>0.5</option>
                            <option>1.0</option>
                            <option>1.5</option>
                            <option>2.0</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    };
};

export default NewUser;