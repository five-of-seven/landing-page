import React, { Component, PropTypes } from 'react'

// Custom CSS styling
import './index.css'
// ******************

let loadYT

class YouTube extends Component {
  componentDidMount () {
    if (!loadYT) {
      loadYT = new Promise((resolve) => {
        const tag = document.createElement('script')
        tag.src = 'https://www.youtube.com/iframe_api'
        const firstScriptTag = document.getElementsByTagName('script')[0]
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
        window.onYouTubeIframeAPIReady = () => resolve(window.YT)
      })
    }
    loadYT.then((YT) => {
      this.player = new YT.Player(this.youtubePlayerAnchor, {
        height: 715,
        width: 1280,
        videoId: 'sq9rZJIVOPk',
        playerVars: { 
          'autoplay': 1, 
          'controls': 0,
          'disablekb': 1,
          'fs': 0,
          'iv_load_policy': 3,
          'loop': 1,
          'modestbranding': 1,
          'playlist': 'sq9rZJIVOPk' 
        },
        events: {
          onStateChange: this.onPlayerStateChange
        }
      })
    })
  }

  onPlayerStateChange = (e) => {
    if (typeof this.props.onStateChange === 'function') {
      this.props.onStateChange(e)
    }
  }

  render () {
    return (
      <section className='player'>
        <div ref={(r) => { this.youtubePlayerAnchor = r }}></div>
      </section>
    )
  }
}

// YouTube.propTypes = {
//   YTid: 'sq9rZJIVOPk',
//   width: PropTypes.number,
//   height: PropTypes.number,
//   onStateChange: PropTypes.func
// }

export default YouTube