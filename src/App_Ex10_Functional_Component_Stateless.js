import React, { Component } from 'react'

export default class App extends Component 
{
    render(){
        return(
            <div>
                <Content title = "name" subtitle ="nickname"/>
                <Header message ="evejyaaa"/>
            </div>
        )
    }
}

/*functional component */
const Content = ({title,subtitle})=>{
    return(
        <div>
            <h1>title : {title} </h1>
            <h3>Subtitle : {subtitle} </h3>
        </div>
    )
}

const Header =({message})=>{
    return(
        <div>message : {message}</div>
    )
}
    

