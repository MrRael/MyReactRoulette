import React, { Component } from 'react';
import './Vote.scss'
import './VoteControl.scss'

export class VoteControl extends Component {
    constructor(props) {
        super(props);
        this.state = { voteName: "", submitedBy: "" }
    };

    onTextChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    onAddClick = () => {
        const { voteName, submitedBy } = this.state;
        this.props.onSubmit(voteName, submitedBy);
        this.setState({voteName: "", submitedBy: ""});
    };

    render = () => {
        const {voteName, submitedBy} = this.state;
        return (
            <div className="vote-control-div">
                <input onChange={this.onTextChange} name="voteName" placeholder="Text" value={voteName} className="vote-control-text" type="text"></input>
                <input onChange={this.onTextChange} name="submitedBy" placeholder="Author" value={submitedBy} className="vote-control-text" type="text"></input>
                <button className="vote-control-btn" onClick={() => this.onAddClick()}>Add</button>
            </div>
        );
    }
}