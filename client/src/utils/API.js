import axios from "axios";

export default {
    createUser: function (userData) {
        return axios.post("/api/user", userData);
    },
    updateUser: function (email, userData) {
        return axios.put("/api/user/" + email, userData);
    },
    getUser: function () {
        return axios.get("/api/user");
    },
    login: function (userData) {
        return axios.post("/api/login", userData);
    },
    logWorkout: function (userData) {
        return axios.post("/api/workout", userData)
    },
    showExercise: function () {
        return axios.get("/api/workout")
    },
    searchFood: function (query) {
        return axios.post("https://trackapi.nutritionix.com/v2/natural/nutrients", {
            query: query
        }, {
            headers: {
                "Content-Type": "application/json",
                "x-app-id": "a3c96e07",
                "x-app-key": "ea8f4ac32f52281362afd5ed366bf27e"
            }
        });
    },
    logMeal: function (userData) {
        return axios.post("/api/meal", userData)
    },
    showMeal: function () {
        return axios.get("/api/meal")
    }
};