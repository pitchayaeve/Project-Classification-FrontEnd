import React, { Component } from 'react'

export default class App_Ex3_Props_Event extends Component {

    onClickBtn2 = ()=>{
        alert("akakkdkdkdkd")
    }
    render() {
        return (
            <div>
                <button type="button" onClick={()=>alert("5555")}>Btn1</button>
                <button type="button" onClick={this.onClickBtn2}>Btn2</button>
                <MyButton onSubmit={()=>{alert("My Button")}}/>
                <button type="button" class="btn btn-outline-primary">aaaaaaaa</button>
            </div>
        )
    }
}
class MyButton extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <button 
                style={{backgroundColor:"#f00"}}
                type="button" 
                onClick={this.props.onSubmit}>MyBtn1</button>
            </div>
        )
    }
}

