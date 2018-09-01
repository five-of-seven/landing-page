import React, { Component } from 'react';
import SignUp from '.././SignUp/index'

// React Routing
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// *************

// Material UI styles
import { AppBar, TextField, Button, Grid } from '@material-ui/core';
import { FormControl, FormLabel } from '@material-ui/core';
// ******************

// Custom CSS styling
import './index.css';
// ******************

class LogIn extends Component {
    render() {
        return(
            <div>
                <Grid container spacing={24} direction="column">
                    <Grid container item spacing={0} justify="center">
                        <Grid item xs={4}>
                            <AppBar margin ="auto" position="static" color="white" alignContent="center" className="LogIn-form">
                                <TextField
                                    id="search"
                                    label="User Name"
                                    type="search"
                                    margin="dense"
                                    className="TextField"
                                />
                                <TextField
                                    id="password-input"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    margin="dense"
                                    className="TextField"
                                />
                                <Button className="Button" variant="contained" color="primary">
                                    Log In
                                </Button>
                                <Router>
                                <p>Not a member? <span><Link to="/signUp" component={SignUp}>Sign Up here</Link></span> </p>
                                </Router>
                            </AppBar>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}   

export default LogIn;