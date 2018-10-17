import React, { Component } from 'react'
import axios from 'axios'

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
            userId: '',
            jwt: ''
        }
        this.handleLogout = this.handleLogout.bind(this)
    }

    handleLogout() {
        // let idAndjwt = this.state.userId + this.state.jwt
        axios.post(`http://18.191.158.114:8000/logout?jwt=${this.state.jwt}`, {
            data: {
                userId: this.state.userId.slice(8)
            }
            })
          .then(function (response) {
            console.log(response);
            window.location = '/'
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    componentDidMount() {
        let url = this.props.location.search.split('&')
        this.setState({userId: url[0]})
        this.setState({jwt: '&' + url[1]})
    }

    render() {
        var url = `http://54.183.163.131${this.state.userId}`;
        var url2 = `http://18.191.254.197/#/profile${this.state.userId}`;
        var url3 = `http://18.218.103.135${this.state.userId}`;
        return (
            <div>
                {/* <Navbar/> */}
                <Grid container spacing={24}>
                    <Grid item xs={3}>
                        <Paper className="newsFeed"><iframe src={url2} width="100%" height="100%"></iframe></Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className="newsFeed">
                            <iframe src={url} width="100%" height="100%"></iframe>                        
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        {/* <Paper><h1>{url}</h1></Paper> */}
                        <Paper onClick={()=>this.handleLogout()}>Logout</Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default HomePage