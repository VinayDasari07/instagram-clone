import "./App.css";
import { Login } from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  let userList = [
    {
      userName: "aaa.bbb@ccc.com",
      password: "xyz",
      name: "abc",
      email: "aaa.bbb@ccc.com",
    },
  ];

  const checkLogin = (e, email, password) => {
    e.preventDefault();
    const user = userList.find(
      (obj) => obj.email === email || obj.userName === email
    );
    if (user) {
      if (user.password === password) {
        alert("WelCome");
        return;
      }
    }
    alert("Fucked Up");
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login checkLogin={checkLogin} />
        </Route>
        <Route path="/login">
          <Login checkLogin={checkLogin} />
        </Route>
        <Route path="/signup">
          <Signup userList={userList}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
