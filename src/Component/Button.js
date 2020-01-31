import React, { Component } from 'react'
import styled from 'styled-components'
import "./Button.css"

/*
- Primary button
- Button
- process button basic
- process button onchange
*/

const Button = styled.button`
    font-family : sans-serif;
    font-size : 1 rem;
    color : #fffff0;
    background-color : #ff944d;
    border-radius : 8px;
    padding : 10px 10px;
`;
const Button2 = styled(Button)`
    color : #ff9440;
    background-color : #ffffff;
    border : 3px solid #ff944d;
    
`;

/*class App extends Component {
    render() {
        return (
            <div>
                
                <Button2>LOG IN</Button2>
                <Button primary>CREATE</Button>
            </div>
        )
    }
}
*/
export default Button;

