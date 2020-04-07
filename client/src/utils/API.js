import axios from "axios";

export default {
    createUser: function() {
        return axios.post("/api/user");
    }
};