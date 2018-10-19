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
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        axios.get('https://uiwr3rzqge.execute-api.us-east-2.amazonaws.com/default/karma-points_put?id=2349')
        .then(function (response) {
            console.log(response.data);
        })

    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
              <AppBar position="static">
                <Toolbar>
                  <Typography variant="h6" color="inherit" className={classes.grow}>
                    Home
                  </Typography>
                  <Typography variant="h6" color="inherit" className={classes.grow}>
                    Chat
                  </Typography>
                  <Typography variant="h6" color="inherit" className={classes.grow}>
                    Profile
                  </Typography>
                  <Button color="inherit">Logout</Button>
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