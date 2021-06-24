import "./App.css";
import { Login } from "./Components/Login/Login";
import { Feed } from "./Components/Feed/Feed";
import Signup from "./Components/Signup/Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { axiosConfig } from ".//config-files/axios.config.js";

function App() {
  const [user, setUser] = useState(null);

  let token = localStorage.getItem("token");
  if (token && !user) {
    axios
      .get("/api/get-logged-in-user", axiosConfig)
      .then((res) => {
        setUser(res.data)
      })
      .catch((err) => console.log(err));
  }
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login user={user} />
        </Route>
        <Route path="/login">
          <Login user={user} />
        </Route>
        <Route path="/signup">
          <Signup user={user} />
        </Route>
        <Route path="/user-feed">
          <Feed user={user} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
