import './App.css';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './components/login/Login';
import ProductList from './components/product-list/ProductList';

function App() {
  return (
    <div className="App">
      {/* We want a header that will appear in every screen */}
      <Switch>
        <Route path="/products" component={ProductList} />{" "}
        {/* We don't wan't non-authenticated users to access the previous route! */}
        <Route path="/" component={Login} />
        <Redirect to="/products" />
      </Switch>
    </div>
  );
}

export default App;
