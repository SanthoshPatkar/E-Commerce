import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductElectronics from "./Components/ProductElectronics";
import ProductHome from "./Components/ProductHome";
import Backto from "./Components/backto";
import Footer from "./Components/Footer";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./Components/StateProvider";
// import { Switch } from "react-router";
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/productElectronics">
            <Header />
            <ProductElectronics />
            <Backto />
            <Footer />
          </Route>
          <Route path="/productHome">
            <Header />
            <ProductHome />
            <Backto />
            <Footer />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <Backto />
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Backto />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
