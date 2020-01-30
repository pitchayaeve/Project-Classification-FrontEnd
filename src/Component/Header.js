import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        //JSX
        return (
            <div style={style.Header}>
                <h1>SORTING AND PICKING SYSTEMS VIA MACHINE LEARNING</h1>
            </div>
        )
    }
}
const style ={
    Header : 
    {
        color:'white',
        fontsize : 50,
        backgroundColor:'#ff0000',
        height : 100,
    }
    
}