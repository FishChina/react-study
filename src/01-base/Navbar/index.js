//fish 220623

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Navbar extends Component {
  render() {
    //console.log(this.props)
    let {title,leftshow} = this.props
    return (
        
      <div>
        {leftshow && <button>返回</button>}
        navbar-{title}
        <button>home</button>
        </div>
    )
  }
}

Navbar.propTypes = {
    title: PropTypes.string,
    leftshow: PropTypes.bool
}
