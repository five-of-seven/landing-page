import React, { Component } from 'react'

// React Routing
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
// *************

// Material UI styles
import { AppBar, TextField, Button, Grid, Paper } from '@material-ui/core'
import { FormControl, FormLabel } from '@material-ui/core'
// ******************

import Navbar from './Navbar/index'

class HomePage extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Grid container spacing={24}>
                    <Grid item xs={3}>
                        <Paper><h1>Services</h1></Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper><h1>News Feed</h1></Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper><h1>Logout</h1></Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default HomePage