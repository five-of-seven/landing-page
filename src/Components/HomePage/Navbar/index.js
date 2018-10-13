import React, { Component } from 'react'
import axios from 'axios'

// Material UI styles
import { AppBar, Button, Toolbar, Grid} from '@material-ui/core'
// ******************

// Custom CSS styling
import './index.css';
// ******************



class Navbar extends Component {

    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        axios.get('https://uiwr3rzqge.execute-api.us-east-2.amazonaws.com/default/karma-points_put?id=2349')
        .then(function (response) {
            console.log(response.data);
        })

    }

    render() {
        return (
            <div>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Grid container spacing={16}>
                            <Grid item>
                                <Button onClick={()=>this.handleClick()}  variant="contained" size="large" color="primary" >
                                For Sale
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" size="large" color="primary" >
                                Barter
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" size="large" color="primary" >
                                Events
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" size="large" color="primary" >
                                Services
                                </Button>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        )
}
}

export default Navbar