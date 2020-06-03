import React, { createContext, useReducer, useContext } from "react";
import {
    CREATE_NEWUSER,
    UPDATE_NEWUSER,
    SIGN_IN,
    UPDATE_GOALWEIGHT,
    UPDATE_WEIGHT,
    LOG_WORKOUT,
    SHOW_EXERCISE
} from "./actions";

const UserContext = createContext();
const { Provider } = UserContext;

const reducer = (state, action) => {
    switch (action.type) {
        case CREATE_NEWUSER:
            return {
                ...state,
                id:action.newUser.id,
                name: action.newUser.name,
                email: action.newUser.email,
                password: action.newUser.password
            };
        case UPDATE_NEWUSER:
            return {
                ...state,
                age: action.updateNewUser.age,
                gender: action.updateNewUser.gender,
                height: action.updateNewUser.height,
                currentWeight: action.updateNewUser.weight,
                goalWeight: action.updateNewUser.goal_weight,
                weightLoss: action.updateNewUser.weight_loss
            };
        case SIGN_IN:
            return {
                ...state,
                id: action.currentUser.id,
                name: action.currentUser.name,
                email: action.currentUser.email,
                age: action.currentUser.age,
                gender: action.currentUser.gender,
                height: action.currentUser.height,
                currentWeight: action.currentUser.weight,
                goalWeight: action.currentUser.goal_weight,
                weightLoss: action.currentUser.weight_loss
            };
        case UPDATE_GOALWEIGHT:
            return {
                ...state,
                goalWeight: action.goalWeight.goal_weight,
                weightLoss: parseFloat(action.goalWeight.weight_loss)
            };
        case UPDATE_WEIGHT:
            return {
                ...state,
                currentWeight: action.weight.weight
            };
        case LOG_WORKOUT:
            return {
                ...state,
                type: action.logWorkout.type,
                exercise: action.logWorkout.exercise,
                sets: action.logWorkout.sets,
                reps: action.logWorkout.reps,
                weight: action.logWorkout.weight,
                rest: action.logWorkout.rest,
                time: action.logWorkout.time,
                distance: action.logWorkout.distance
            };
        case SHOW_EXERCISE:
            return {
                ...state,
                type: action.showExercise.type,
                exercise: action.showExercise.exercise,
                sets: action.showExercise.sets,
                reps: action.showExercise.reps,
                weight: action.showExercise.weight,
                rest: action.showExercise.rest,
                time: action.showExercise.time,
                distance: action.showExercise.distance
            }
        default:
            return state;
    };
};

const UserProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        name: "",
        email: "",
        password: "",
        age: "",
        gender: "",
        height: "",
        currentWeight: "",
        goalWeight: "",
        weightLoss: ""
    });

    return <Provider value={[state, dispatch]} {...props} />;
};

const useUserContext = () => {
    return useContext(UserContext);
};

export { UserProvider, useUserContext };