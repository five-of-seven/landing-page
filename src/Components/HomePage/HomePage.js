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
            jwt: '',
            showProfile: false,
            showFeed: true,
            showChat: false
        }
        this.handleLogout = this.handleLogout.bind(this);
        this.handleProfileClick = this.handleProfileClick.bind(this);
        this.handleFeedClick = this.handleFeedClick.bind(this);
        this.handleChatClick = this.handleChatClick.bind(this);
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

    handleProfileClick() {
        console.log("Hey you clicked profile");
        this.setState({ showProfile: true, showFeed: false, showChat: false });
    }

    handleFeedClick() {
        console.log("Hey you clicked Feed");
        this.setState({ showProfile: false, showFeed: true, showChat: false });
    }

    handleChatClick() {
        console.log("Hey you clicked Chat");
        this.setState({ showProfile: false, showFeed: false, showChat: true });
    }

    componentDidMount() {
        let url = this.props.location.search.split('&')
        this.setState({userId: url[0]})
        this.setState({jwt: '&' + url[1]})
    }

    render() {
        var url = `http://54.183.163.131${this.state.userId}`;
        var url2 = `http://18.191.254.197/#/profile${this.state.userId}`;
        var url3 = `http://52.14.229.151${this.state.userId}${this.state.jwt}`;
        console.log(url3)
        console.log(this.state.userId)
        return (
            <div>
                { <Navbar profileClick={this.handleProfileClick} feedClick={this.handleFeedClick} chatClick={this.handleChatClick} showProfile={this.state.showProfile} showFeed={this.state.showFeed} showChat={this.state.showChat}/> }

                {this.state.showProfile ?
                    <Grid item>
                        <Paper className="newsFeed"><iframe src={url2} width="100%" height="100%"></iframe></Paper>
                    </Grid>
                    : null
                }
                 {this.state.showFeed ?
                    <Grid item>
                        <Paper className="newsFeed">
                            <iframe src={url} width="100%" height="100%"></iframe>
                        </Paper>
                    </Grid>
                    : null
                }
                 {this.state.showChat ?
                    <Grid item>
                        <Paper className="newsFeed">
                            <iframe src={url3} width="100%" height="100%"></iframe>
                        </Paper>
                    </Grid>
                    : null
                }
{/*                    <Grid item xs={3}>
                        <Paper onClick={()=>this.handleLogout()}>Logout</Paper>
                        <Paper className="newsFeed">
                            <iframe src={url3} width="100%" height="100%"></iframe>
                        </Paper>
                    </Grid>*/}

            </div>
        )
    }
}

export default HomePage