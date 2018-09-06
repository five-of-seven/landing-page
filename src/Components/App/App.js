import React, { Component } from 'react'

import Landing_Page from '../Landing_Page/index'
import HomePage from '.././HomePage/HomePage'

// React Routing
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
// *************

// Custom CSS styling
import './App.css';
import './youtube_iframe_api/index.css'
// ******************

class App extends Component {

  componentDidMount () {
    const script = document.createElement("script");

    script.src = "./youtube_iframe_api/index.js";
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    return (
      <Router>
        <div>

          <div className="App" >
          {/* <div className="player"></div> */}
          {/* <TopBar/>
          <LogIn/> */}
          </div>

          <Route exact path="/" component={Landing_Page} />
          <Route path="/homepage" component={HomePage} />

        </div>
      </Router>
    );
  }
}

export default App;
