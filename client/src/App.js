import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import SignIn from "./pages/SignIn";
import NewUser from "./pages/NewUser";
import Home from "./pages/Home";
import Meals from "./pages/Meal";
import Workouts from "./pages/Workout";
import { UserProvider } from "./utils/GlobalState";

function App() {
  return (
    <Router>
      <div>
        <UserProvider>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/sign_up" component={NewUser} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/workouts" component={Workouts} />
          <Route exact path="/meals" component={Meals} />
          <Route exact path="/new_user" component={Home} />
        </UserProvider>
      </div>
    </Router>
  );
}

export default App;
