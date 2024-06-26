import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Features from "./Components/Features";
import Download from "./Components/Download";
import Resume from "./Components/Resume";

function App() {
  return (
    <>
      <Router>
        <Nav title="Fun with words" />
        <Switch>
          <Route exact path="/home">
            <Home fplace="First" lplace="Last" eplace="Email"/>
          </Route>
          <Route exact path="/feature">
            <Features place="Plese enter text to change it into upper case,lower case OR reset box text"/>
          </Route>
          <Route exact path="/resume">
            <Resume/>
          </Route>
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
