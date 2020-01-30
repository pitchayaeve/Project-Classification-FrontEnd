import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class App extends Component {
    render() {
        return (
            <div>
                {this.props.message}{this.props.count}
            </div>
        )
    }
}
App.propTypes = {
    message : PropTypes.string,
    count : PropTypes.number.isRequired
}
App.defaultProps ={
    message : "pitchaya",
    count : 1
}

