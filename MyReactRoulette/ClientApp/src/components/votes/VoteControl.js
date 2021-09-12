import React, { Component } from 'react';
import './Vote.scss'
import './VoteControl.scss'

export class VoteControl extends Component {
    constructor(props) {
        super(props);
        this.state = { voteName: "" }
    };

    onTextChange = (event) => {
        this.setState({voteName: event.target.value});
    };

    onAddClick = () => {
        const { voteName } = this.state;
        this.props.onSubmit(voteName);
        this.setState({voteName: ""});
    };

    render = () => {
        const {voteName} = this.state;
        return (
            <div className="vote-control-div">
                <input onChange={this.onTextChange} value={voteName} className="vote-control-text" type="text"></input>
                <button className="vote-control-btn" onClick={() => this.onAddClick()}>Add</button>
            </div>
        );
    }
}