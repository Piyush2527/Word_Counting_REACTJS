import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Features from "./Components/Features";

function App() {
  return (
    <>
      <Router>
        <Nav title="Fun with words" />
        <Switch>
          <Route exact path="/home">
            <Home fplace="first name" lplace="last name" />
          </Route>
          <Route exact path="/feature">
            <Features place="Plese enter text to change it into upper case,lower case or reset box text"/>
          </Route>
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
