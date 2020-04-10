import React, { createContext, useReducer, useContext } from "react";
import {
    CREATE_NEWUSER,
    UPDATE_NEWUSER
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
                currentWeight: action.updateNewUser.currentWeight,
                goalWeight: action.updateNewUser.goalWeight
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
        goalWeight: ""
    });

    return <Provider value={[state, dispatch]} {...props} />;
};

const useUserContext = () => {
    return useContext(UserContext);
};

export { UserProvider, useUserContext };