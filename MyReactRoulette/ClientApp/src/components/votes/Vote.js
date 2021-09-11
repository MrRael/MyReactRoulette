import React, { Component } from 'react';
import './Vote.scss';

export class Vote extends Component {
    render = () => {
        const { index, submitedBy, name, voteCount } = this.props;
        return (
            <div className="vote-row">
                <div className="vote-num-back"><span className="vote-num">{index}</span></div>
                <div className="vote-message">
                    <span className="vote-name">{name}</span>
                    <span className="vote-author">{submitedBy.join(', ')}</span>
                </div>
                <span className="vote-count">{voteCount}</span>
            </div>
        );
    }
}