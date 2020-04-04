import React, { Component } from "react";
import NewUserButton from "../../NewUser/NewUserButton/NewUserButton";
import "./NewUserForm.css";

class NewUserForm extends Component {
    state = {
        name: "",
        email: "",
        newPass: "",
        confirmPass: ""
    };

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div>
                <h3>If you are a new user, sign up here:</h3>
                <form>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <label>E-Mail</label>
                    <input
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        name="newPass"
                        value={this.state.newPass}
                        onChange={this.handleChange}
                    />
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPass"
                        value={this.state.confirmPass} onChange={this.handleChange}
                    />
                    <NewUserButton />
                </form>
            </div>
        );
    };
};

export default NewUserForm;