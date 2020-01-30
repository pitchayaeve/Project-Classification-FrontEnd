import React, { Component } from 'react'
import styled from 'styled-components'

const Text = styled.span`
    font-size : 200 px;
    background-color:blue;
`

export default class Style  extends Component {
    render() {
        return (
            <div>
                <Text>abcbe</Text>
            </div>
        )
    }
}