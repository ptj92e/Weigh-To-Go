import React, { useRef, useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import "./css/Home.css";
import UpdateWeight from "../components/UpdateWeight/UpdateWeight"
import API from "../utils/API";

function Home() {
    const weightRef = useRef();
    const [userState, setUserState] = useState({
        user: {}
    });

    const viewUser = () => {
        API.getUser()
            .then(result => {
                setUserState({
                    user: result.data
                });
            });
    };

    useEffect(() => {
        viewUser()
    }, []);

    const updateWeight = e => {
        e.preventDefault();
        API.updateUser(userState.user.id, {
            weight: weightRef.current.value
        }).then(() => {
            viewUser();
        });
    }

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
    }

    return (
        <div>
            <Navbar />
            <div id="home">
                <h1>Welcome back {userState.user.name}!</h1>
                <UpdateWeight 
                    calcWeightLoss={calcWeightLoss}
                />
            </div>
        </div>
    )
}
export default Home;