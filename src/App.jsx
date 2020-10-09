import React from "react";
import "./App.css";
import Login from "./components/login/Login";
import { Switch, Route } from "react-router-dom";
import ProductList from "./components/product-list/ProductList";

function App() {
  return (
    <div className="App">
      {/* We want a header that will appear in every screen */}
      <Switch>
        <Route path="/products" component={ProductList} />{" "}
        {/* We don't wan't non-authenticated users to access this route! */}
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
