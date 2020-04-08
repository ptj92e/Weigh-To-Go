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
        console.log("yay");
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
                }).catch(err => console.log(err));
            });
            // window.location.href = "/sign_up";
        };
    };

    return (
        <div>
            <h3>If you are a new user, sign up here:</h3>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required ref={nameRef}
                />
                <label>E-Mail</label>
                <input
                    type="text"
                    name="email"
                    placeholder="E-Mail"
                    required ref={emailRef}
                />
                <label>Password</label>
                <input
                    type="password"
                    name="newPass"
                    placeholder="New Password"
                    required ref={newPassRef}
                />
                <label>Confirm Password</label>
                <input
                    type="password"
                    name="confirmPass"
                    placeholder="Confirm Password"
                    required ref={confirmPassRef}
                />
                <button type="submit">
                    {/* <Link to="/sign_up">Sign Up</Link> */}
                    Sign Up</button>
            </form>
        </div>
    );
};

export default NewUserForm;