import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
const Topic=({match})=>{
        <div>
            <ul>
                <li><link to={`${match}`}> Home </link></li>
                <li><link to = "/about"> About </link></li>
                <li><link to ="/topics"> Topics </link></li>
            </ul>
            <hr/>
                <Route exact path = "/" component = {Home}></Route>
                <Route path ="/(about|who)" component = {About}></Route>
                <Route path = "/topics" component ={Topics}></Route>
        </div>
}
