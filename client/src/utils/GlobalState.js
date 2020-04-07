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
                newUser: action.newUser
            };
        case UPDATE_NEWUSER:
            return {
                ...state,
                newUserInfo: action.updateNewUser
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