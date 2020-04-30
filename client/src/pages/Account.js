import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import "./css/Account.css";

function Account() {
    return (
        <div>
            <Navbar />
            <div id="account">
                <h1>Hello Account</h1>
            </div>
        </div>
    )
}

export default Account;