import React, { Component } from 'react';
import './index.css';
import img from './images/logo_houses.png';

class TopBar extends Component {
    render() {
        return(
            <div className="TopBar-header">
                <h1 className="App-title">
                  <img src={img} alt='logo'/>
                </h1>
                <p className="TopBar-motto">Connect, Help, Befriend</p>
            </div>
        )
    }
}

export default TopBar;