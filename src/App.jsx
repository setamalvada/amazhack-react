import React, { useState } from "react";
import "./App.css";
import Login from "./components/login/Login";
import { Switch, Route, Redirect } from "react-router-dom";
import ProductList from "./components/product-list/ProductList";
import AuthenticatedRoute from "./components/authenticated-route/AuthenticatedRoute";

function App() {
  const [user, setUser] = useState();
  return (
    <div className="App">
      <Switch>
        <AuthenticatedRoute
          path="/products"
          user={user}
          component={(props) => <ProductList {...props} user={user} />}
        />
        <Route
          path="/login"
          component={(props) => (
            <Login {...props} user={user} setUser={setUser} />
          )}
        />
        <Redirect to="/products" />
      </Switch>
    </div>
  );
}

export default App;
