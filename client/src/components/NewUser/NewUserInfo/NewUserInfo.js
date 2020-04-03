import React, { Component } from "react";
import "./NewUserInfo.css";
import NewUserSubmit from "../NewUserSubmit/NewUserSubmit";

class NewUserInfo extends Component {
    render() {
        return (
            <div>
                <h3>If you are a new use, sign up here:</h3>
                <form>
                    <label>What is your Age?</label>
                    <input type="text" id="age"></input>
                    <label>What is your Gender?</label>
                    <select id="gender" className="form-select">
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                    <label>What is your Height?</label>
                    <select id="feet" className="form-select">
                        <option>3'</option>
                        <option>4'</option>
                        <option>5'</option>
                        <option>6'</option>
                        <option>7'</option>
                    </select>
                    <select id="inches" className="form-select">
                        <option>0"</option>
                        <option>1"</option>
                        <option>2"</option>
                        <option>3"</option>
                        <option>4"</option>
                        <option>5"</option>
                        <option>6"</option>
                        <option>7"</option>
                        <option>8"</option>
                        <option>9"</option>
                        <option>10"</option>
                        <option>11"</option>
                    </select>
                    <label>What is your current weight?</label>
                    <input type="text" id="currentWeight"></input>
                    <label>What is your goal weight?</label>
                    <input type="text" id="goalWeight"></input>
                    <NewUserSubmit />
                </form>
            </div>
        )
    }
}

export default NewUserInfo;