import './App.css';
import React, {useState} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './components/login/Login';
import ProductList from './components/product-list/ProductList';
import AuthenticatedRoute from "./components/AuthenticatedRoute/AuthenticatedRoute"

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const onLogIn = (loggedInUser) => {
    localStorage.setItem("user", JSON.stringify(loggedInUser));
    setUser(loggedInUser)
  }


  return (
    <div className="App">
      {/* We want a header that will appear in every screen */}
      <Switch>
        <AuthenticatedRoute
        path="/products" 
        render={(props) => <ProductList {...props} user={user} />}
        user= {user}
        />
   
        {/* We don't wan't non-authenticated users to access the previous route! */}
       <Route 
       path="/login"
       render={(props) => <Login {...props} user={user} onLogIn={onLogIn} />}
       />
        <Redirect to="/products" />
      </Switch>
    </div>
  );
}

export default App;
