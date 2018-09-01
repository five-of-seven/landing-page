import React, { Component } from 'react';

// React Routing
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// *************

// Custom CSS styling
import './App.css';
// ******************

import TopBar from '../Landing-page-TopBar/index.js';
import LogIn from '../LogIn/index';

class App extends Component {
  render() {
    return (
      <div className="App" >
      {/* <Grid> */}
      <TopBar/>
      <LogIn/>
      </div>
    );
  }
}

export default App;
