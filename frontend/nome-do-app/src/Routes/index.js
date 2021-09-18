import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import TaskDetails from "../components/TaskDetails";

const Routes = () => (
    <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/home" component={Home} />
    <Route path="/:taskTitle" component={TaskDetails} />
  </Switch>
);

export default Routes;