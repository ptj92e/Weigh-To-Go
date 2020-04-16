import axios from "axios";

export default {
    createUser: function(userData) {
        return axios.post("/api/user", userData);
    },
    updateUser: function(email, userData) {
        return axios.put("/api/user/" + email, userData);
    },
    getUser: function() {
        return axios.get("/api/user");
    },
    login: function(userData) {
        return axios.post("/api/login", userData);
    },
    logWorkout: function(userData) {
        return axios.post("/api/workout", userData)
    },
    showExercise: function() {
        return axios.get("/api/workout")
    }
};