import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { useUserContext } from "../utils/GlobalState";

function Home() {
    const [state, dispatch] = useUserContext();
    return(
        <div>
            <Navbar />
            <h1>Hello {state.name}</h1>
        </div>
    )
}
export default Home;