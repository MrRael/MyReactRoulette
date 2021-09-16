import React, { Component } from "react";
import './VoteLineElement.scss';

export class VoteLineElement extends Component {
    render = () => {
        const { name } = this.props;
        return (
            <span className="vote-line-element">{name}</span>
        );
    }
}
