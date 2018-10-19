import React, { Component } from 'react'

import TopBar from './Landing-page-TopBar/index'
import LogIn from './LogIn/index'
import YouTube from './YouTube_API/iFrame'

class Landing_Page extends Component {
    render() {
        return(
            <div>
                <YouTube/>
                <TopBar/>
                <LogIn/>
            </div>
        )
    }
}

export default Landing_Page