import React, { Component } from 'react';
import BlankHeader from "../../Components/BlankHeader";

export default class SuggestEx extends Component {
    render() {
        return (
            <div>
                <BlankHeader></BlankHeader>
                <p>Suggest Data Type</p>
                <p>set your data type,select one from following type.</p>
                <p>or not similar to any type, you can</p>  
            </div>
        )
    }
}
