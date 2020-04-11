import React, { createContext, useReducer, useContext } from "react";
import {
    CREATE_NEWUSER,
    UPDATE_NEWUSER,
    SIGN_IN,
    UPDATE_GOALWEIGHT,
    UPDATE_WEIGHT
} from "./actions";

const UserContext = createContext();
const { Provider } = UserContext;

const reducer = (state, action) => {
    switch (action.type) {
        case CREATE_NEWUSER:
            return {
                ...state,
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