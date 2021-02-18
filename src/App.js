import React from 'react'
// import Addtodo from './components/Addtodo'
import './App.css';
import NavBar from './NavBar';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Welcome from './pages/Welcome';
import FireAuth from './FireAuth';


function App() {
  return (
    <div>
          <Router>
          <NavBar />
            <Switch>
          <Route path="/Product">
            <Product />
          </Route>
          <Route path="/Cart">
            <Cart />
          </Route>
          <Route path="/Login">
            <FireAuth />
          </Route>
          <Route path="/Welcome">
            <Welcome />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch> 
         </Router> 
        </div>
  
  );
}

export default App;
