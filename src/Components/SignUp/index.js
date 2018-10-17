import React, { Component } from 'react';
import TopBar from '../Landing_Page/Landing-page-TopBar/index'
import YouTube from '../Landing_Page/YouTube_API/iFrame'

// Material UI styles
import { AppBar, TextField, Button, Grid } from '@material-ui/core';
// ******************

// Custom CSS styling
import './index.css'
// ******************

// React Routing
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// *************

function SignUp() {
        return (
            <div>
                <YouTube/>
                <TopBar/>
                <Grid container spacing={24} direction="column">
                    <Grid container item spacing={0} justify="center">
                        <Grid item xs={4}>
                            <AppBar margin ="auto" position="static" color="default" className="SignIn-form">
                                {/* Sign-UP microservice component */}
                            <iframe height="90%" src="http://18.191.158.114:8000/signup"></iframe>
                                {/* <div id="signup"></div>
                                <script type="text/javascript" src="http://18.224.138.143/signup/bundle.js"></script> */}
                            </AppBar>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
}

export default SignUp;