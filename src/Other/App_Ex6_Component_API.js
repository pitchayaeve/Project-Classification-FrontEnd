import React, { Component } from 'react'
import ReactDom from 'react-dom'

export default class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count1 : 0,
             count2 : 0
        }
    }
    
    render() {

        const {count1,count2} = this.state

        return (
            <div>
                <button onClick={()=>this.setState({count1 : count1+1000})} 
                type="button" 
                class="btn btn-outline-primary">setState {count1}</button>

                <button onClick={()=>(this.setState(prevState=>{return {count2 : prevState.count1+ prevState.count2}}))} 
                type="button" 
                class="btn btn-outline-primary">setStateV2 {count2}</button>
                
                <button onClick={()=>this.forceUpdate()} Type="button" class="btn btn-outline-primary">forceUpdate {Math.random()}</button>
                <button onClick={()=>
                    {
                        var myDiv = document.getElementById('comment');
                        ReactDom.findDOMNode(myDiv).style.backgroundColor = 'blue';
                    }
                }
                type="button" class="btn btn-outline-primary">findDomNode</button>

                <div id = "comment">PROJECT</div>
            </div>
        )
    }
}
