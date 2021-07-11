import "./App.css";
import { Login } from "./Components/Login/Login";
import { Feed } from "./Components/Feed/Feed";
import { Navbar } from "./Components/Navbar/Navbar";
import Signup from "./Components/Signup/Signup";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import {
  useState,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import axios from "axios";
import { axiosConfig } from ".//config-files/axios.config.js";
import UserProfile from "./Components/UserProfile/UserProfile";
import { reducer, initialState } from "./reducers/userReducer";

export const UserContext = createContext();
function Routing() {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    axios
      .get("/api/get-logged-in-user", axiosConfig)
      .then((res) => {
        dispatch({ type: "USER", payload: res.data });
      })
      .catch((err) => {
        history.push("/login");
      });
  }, []);

  return (
    // <UserContext.Provider value={{state, dispatch}}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Feed />
        </Route>
        <Route path="/login">
          <Login />
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
      </Switch>
    </Router>
    // </UserContext.Provider>
  );
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <Router>
        <Navbar />
        <Routing />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
