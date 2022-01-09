import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductElectronics from "./Components/ProductElectronics";
import Login from "./Components/Login";
// import { Switch } from "react-router";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/productElectronics">
            <Header />
            <ProductElectronics />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
