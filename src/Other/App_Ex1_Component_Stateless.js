import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Content/>
            </div>
        )
    }
}

class Header extends Component {
    render() {
        //JSX
        return (
            <div style={style.Header}>
                <h1>12233333</h1>
            </div>
        )
    }
}

class Content extends Component {
    render() {
        //JSX
        return (
            <div style={style.Content}>
                <p>ssslslslslslslsls</p>
            </div>
        )
    }
}

const style ={
    Header : {backgroundColor:'#ff0000',height : 100},
    Content : {backgroundColor:'#fff000',height : 500}
}