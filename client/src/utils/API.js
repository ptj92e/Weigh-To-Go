import axios from "axios";

export default {
    createUser: function(userData) {
        return axios.post("/api/user", userData);
    },
    updateUser: function(email, userData) {
        return axios.put("/api/user/" + email, userData);
    },
    login: function(userData) {
        return axios.post("/api/login", userData);
    }
};