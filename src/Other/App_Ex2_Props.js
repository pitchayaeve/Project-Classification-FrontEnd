import React, { Component } from 'react'

export default class App_Ex2_Props extends Component {
    render() {
        return (
            <div>
                <Entry label="username :" type="text" hint="email"/>
                <Entry label="password :" type="password" hint="password"/>
            </div>
        )
    }
}

//Component
class Entry extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <span>{this.props.label}</span>
                <input type={this.props.type} name="" id="input" required="required" pattern="" title="" placeholder={this.props.hint}/>           
            </div>
        )
    }
}

