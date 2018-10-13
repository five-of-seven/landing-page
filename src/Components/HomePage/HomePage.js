import React, { Component } from 'react'

// React Routing
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
// *************

// Material UI styles
import { AppBar, TextField, Button, Grid, Paper } from '@material-ui/core'
import { FormControl, FormLabel } from '@material-ui/core'
// ******************

// Custom CSS styles
import './HomePage.css'
// *****************

import Navbar from './Navbar/index'

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: ''
        }
    }

    componentDidMount() {
        console.log(this.props.location.search)

        this.setState({userId: this.props.location.search})
    }

    render() {
        var url = `http://54.183.163.131${this.state.userId}`;
        return (
            <div>
                {/* <Navbar/> */}
                <Grid container spacing={24}>
                    <Grid item xs={3}>
                        <Paper><h1>Services</h1></Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className="newsFeed">
                            <iframe src={url} width="100%" height="100%"></iframe>                        
                        </Paper>
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