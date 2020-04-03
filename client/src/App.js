import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import SignIn from "./components/SignIn/SignIn";
import NewUser from "./components/NewUser/NewUser";
import Home from "./components/Home/Home";
import Meals from "./components/Meal/Meal";
import Workouts from "./components/Workout/Workout";
import Account from "./components/Account/Account";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/sign_up" component={NewUser} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/workouts" component={Workouts} />
          <Route exact path="/meals" component={Meals} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/new_user" component={Home} />
        </div>
      </Router>
    </div>
  );
}

export default App;
