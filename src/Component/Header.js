import React, { Component } from 'react'
import logo from './logo.jpg';



export default class Header extends Component {
    render() {
        //JSX
        return (
            <div style={style.Header}>
                <img src={logo} className="App-logo" alt="logo" size = "30%" />
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
        backgroundColor:'#2699FB',
        height : 100,
        padding : 20
    }
    
}