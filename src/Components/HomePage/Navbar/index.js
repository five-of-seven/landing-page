import React, { Component } from 'react'

// Material UI styles
import { AppBar, Button, Toolbar, Grid} from '@material-ui/core'
// ******************

// Custom CSS styling
import './index.css';
// ******************



class Navbar extends Component {
    render() {
        return (
            <div>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Grid container spacing={16}>
                            <Grid item>
                                <Button variant="contained" size="large" color="primary" >
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