import React, { useRef } from "react";
import { useUserContext } from "../../utils/GlobalState";
import { CREATE_NEWUSER } from "../../utils/actions";
import "./NewUserForm.css";
import API from "../../utils/API";

function NewUserForm() {
    const nameRef = useRef();
    const emailRef = useRef();
    const newPassRef = useRef();
    const confirmPassRef = useRef();
    const [state, dispatch] = useUserContext();

    const handleSubmit = e => {
        e.preventDefault();
        if (newPassRef.current.value !== confirmPassRef.current.value) {
            alert("The two password fields should match.");
        } else {
            API.createUser({
                name: nameRef.current.value,
                email: emailRef.current.value,
                password: newPassRef.current.value
            }).then(result => {
                dispatch({
                    type: CREATE_NEWUSER,
                    newUser: result.data
                });
            });
        };
    };

    return (
        <div id="newUserForm">
            <h3>Don't have an account?</h3>
            <form onSubmit={handleSubmit}>
                <div className="column col-12">
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        required ref={nameRef}
                    />
                    <label>E-Mail:</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="E-Mail"
                        required ref={emailRef}
                    />
                </div>
                <div className="column col-12">
                    <label>Password:</label>
                    <input
                        type="password"
                        name="newPass"
                        placeholder="New Password"
                        required ref={newPassRef}
                    />
                    <label>Confirm:</label>
                    <input
                        type="password"
                        name="confirmPass"
                        placeholder="Confirm Password"
                        required ref={confirmPassRef}
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default NewUserForm;