import React, { Component } from 'react'

import TopBar from './Landing-page-TopBar/index'
import LogIn from './LogIn/index'

class Landing_Page extends Component {
    render() {
        return(
            <div>
                <TopBar/>
                <LogIn/>
                <video className='player' autoPlay loop muted>
                    <source src='https://www.youtube.com/watch?v=sq9rZJIVOPk' type='video/mp4' />
                </video>
            </div>
        )
    }
}

export default Landing_Page