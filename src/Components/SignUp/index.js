import React, { Component } from 'react';

// Material UI styles
import { AppBar, TextField, Button, Grid } from '@material-ui/core';
// ******************

// Custom CSS styling
import './index.css'
// ******************

// React Routing
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// *************

class SignUp extends Component {
    render() {
        return (
            <div>
                <Grid container spacing={24} direction="column">
                    <Grid container item spacing={0} justify="center">
                        <Grid item xs={4}>
                            <AppBar margin ="auto" position="static" color="default" className="LogIn-form">
                                <TextField
                                    id="search"
                                    label="First Name"
                                    type="search"
                                    margin="dense"
                                    className="TextField"
                                />
                                <TextField
                                    id="search"
                                    label="Last Name"
                                    type="search"
                                    margin="dense"
                                    className="TextField"
                                />
                                <TextField
                                    id="search"
                                    label="E-mail"
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
                                    SignUp
                                </Button>
                            </AppBar>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default SignUp;