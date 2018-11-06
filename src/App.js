import React, { Component, Fragment } from 'react';
import './App.css';
import Home from './containers/Home/Home';
import Checkout from './containers/Checkout/Checkout';
import Header from './components/header/header';
import {Route,Switch } from 'react-router-dom';

class App extends Component {


  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route  path="/checkout" component={Checkout} />
          <Route exact path="/"  component={Home} />
        </Switch>
       
        
      </Fragment>

    );
  }
}

export default App;
