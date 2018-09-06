import React, { Component } from 'react';
import './index.css';

class TopBar extends Component {   
    render() {
        return(
            <div className="TopBar-header">
                <h1 className="App-title">Community</h1>
                <p className="TopBar-motto">Connect Help Befriend</p>
            </div> 
        ) 
    }
}

export default TopBar;