import React from "react";
import "./App.css";
import Login from "./components/login/Login";
import { Switch, Route } from "react-router-dom";
import ProductList from "./components/product-list/ProductList";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/products" component={ProductList} />
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
