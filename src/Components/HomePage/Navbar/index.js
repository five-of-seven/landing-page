import React, { Component } from 'react';
import axios from 'axios';

// Material UI styles
import { AppBar, Button, IconButton, Toolbar, Grid, Typography} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
// ******************

// Custom CSS styling
import './index.css';
// ******************

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            jwt: ''
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidMount() {
        // let url = this.props.location.search.split('&')
        let url = window.location.search.split('&');
        this.setState({userId: url[0]})
        this.setState({jwt: '&' + url[1]})
    }

    handleClick() {
        axios.get('https://uiwr3rzqge.execute-api.us-east-2.amazonaws.com/default/karma-points_put?id=2349')
        .then(function (response) {
            console.log(response.data);
        })
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

    render() {
        const { classes } = this.props;
        const feedButtonColor = this.props.showFeed ? "textPrimary" : "inherit";
        const chatButtonColor = this.props.showChat ? "textPrimary" : "inherit";
        const profileButtonColor = this.props.showProfile ? "textPrimary" : "inherit";

        console.log('this.props.showFeed...', this.props.showFeed);
        return (
            <div className={classes.root}>
              <AppBar position="static" color="primary">
                <Toolbar>
                  <Typography variant="h6" color={feedButtonColor} className={classes.grow}>
                    <Button color="inherit" onClick={()=>this.props.feedClick()}>
                    Home
                    </Button>
                  </Typography>
                  <Typography variant="h6" color={chatButtonColor} className={classes.grow}>
                    <Button color="inherit" onClick={()=>this.props.chatClick()}>
                    Chat
                    </Button>
                  </Typography>
                  <Typography variant="h6" color={profileButtonColor} className={classes.grow}>
                    <Button color="inherit" onClick={()=>this.props.profileClick()}>
                    Profile
                    </Button>
                  </Typography>
                  <Button color="inherit" onClick={()=>this.handleLogout()}>Logout</Button>
                </Toolbar>
              </AppBar>
            </div>
        );
//         return (
//             <div>
//                 <AppBar position="static" color="default">
//                     <Toolbar>
//                         <Grid container spacing={16}>
//                             <Grid item>
//                                 <Button onClick={()=>this.handleClick()}  variant="contained" size="large" color="primary" >
//                                 Home
//                                 </Button>
//                             </Grid>
//                             <Grid item>
//                                 <Button variant="contained" size="large" color="primary" >
//                                 Chat
//                                 </Button>
//                             </Grid>
//                             <Grid item>
//                                 <Button variant="contained" size="large" color="primary" >
//                                 Profile
//                                 </Button>
//                             </Grid>
// {/*                            <Grid item>
//                                 <Button variant="contained" size="large" color="primary" >
//                                 Services
//                                 </Button>
//                             </Grid>*/}
//                         </Grid>
//                     </Toolbar>
//                 </AppBar>
//             </div>
//         )
}
}

export default withStyles(styles)(Navbar)