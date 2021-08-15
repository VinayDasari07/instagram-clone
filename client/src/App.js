import "./App.css";
import { Login } from "./Components/Login/Login";
import { Feed } from "./Components/Feed/Feed";
import { Navbar } from "./Components/Navbar/Navbar";
import Signup from "./Components/Signup/Signup";
import { EditProfileOptions } from "./Components/EditProfileOptions/EditProfileOptions";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Redirect,
} from "react-router-dom";
import { createContext, useEffect } from "react";
import axios from "axios";
import { axiosConfig } from ".//config-files/axios.config.js";
import UserProfile from "./Components/UserProfile/UserProfile";
import { useSelector, useDispatch } from "react-redux";
export const UserContext = createContext();
function Routing() {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    axios
      .get("/api/get-logged-in-user", axiosConfig)
      .then((res) => {
        dispatch({ type: "USER", payload: res.data });
      })
      .catch((err) => {
        history.push("/login");
      });
  }, [dispatch, history]);

  return (
    <>
      {user ? <Navbar /> : ""}
      <Switch>
        <Route exact path="/">
          {user ? <Feed /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          {!user ? <Login /> : <Redirect to="/user-feed" />}
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/user-feed">
          <Feed />
        </Route>
        <Route path="/user-profile">
          <UserProfile />
        </Route>
        <Route path="/edit-profile">
          <EditProfileOptions />
        </Route>
      </Switch>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routing />
    </Router>
  );
}

export default App;
