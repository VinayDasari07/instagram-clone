import "./App.css";
import { Login } from "./Components/Login/Login";
import { Feed } from "./Components/Feed/Feed";
import { Navbar } from "./Components/Navbar/Navbar";
import Signup from "./Components/Signup/Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { axiosConfig } from ".//config-files/axios.config.js";
import UserProfile from "./Components/UserProfile/UserProfile";

function App() {
  const [user, setUser] = useState(null);
  if (!user) {
    axios
      .get("/api/get-logged-in-user", axiosConfig)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <Navbar user={user}></Navbar>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login user={user} setUser={setUser} />
          </Route>
          <Route path="/login">
            <Login user={user} setUser={setUser} />
          </Route>
          <Route path="/signup">
            <Signup user={user} />
          </Route>
          <Route path="/user-feed">
            {/* <Feed user={user} /> */}
            <UserProfile user={user} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
