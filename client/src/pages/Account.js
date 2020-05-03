import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import UpdateWeight from "../components/UpdateWeight/UpdateWeight";
import UpdateGoalWeight from "../components/UpdateGoalWeight/UpdateGoalWeight";
import "./css/Account.css";

function Account() {
    const calcWeightLoss = (userState) => {
        if (userState.user.goal_weight < userState.user.weight) {
            switch (userState.user.weight_loss) {
                case 0.5:
                    return (userState.user.weight * 3500 - userState.user.goal_weight * 3500) / 1750;
                case 1.0:
                    return (userState.user.weight * 3500 - userState.user.goal_weight * 3500) / 3500;
                case 1.5:
                    return (userState.user.weight * 3500 - userState.user.goal_weight * 3500) / 5250;
                case 2.0:
                    return (userState.user.weight * 3500 - userState.user.goal_weight * 3500) / 7000;
            }
        } else if (userState.user.goal_weight > userState.user.weight) {
            switch (userState.user.weight_loss) {
                case 0.5:
                    return (userState.user.goal_weight * 3500 - userState.user.weight * 3500) / 1750;
                case 1.0:
                    return (userState.user.goal_weight * 3500 - userState.user.weight * 3500) / 3500;
                case 1.5:
                    return (userState.user.goal_weight * 3500 - userState.user.weight * 3500) / 5250;
                case 2.0:
                    return (userState.user.goal_weight * 3500 - userState.user.weight * 3500) / 7000;
            }
        } else {
            return 0;
        }
    };

    return (
        <div>
            <Navbar />
            <div id="account">
                <h1>Hello Account</h1>
                <UpdateWeight 
                    calcWeightLoss={calcWeightLoss}
                />
                {/* <UpdateGoalWeight 
                    calcWeightLoss={calcWeightLoss}
                /> */}
            </div>
        </div>
    )
}

export default Account;