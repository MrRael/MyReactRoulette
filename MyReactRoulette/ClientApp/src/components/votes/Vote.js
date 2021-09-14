import React, { Component } from 'react';
import './Vote.scss';

export class Vote extends Component {

    onDeleteClick = () => {
        const { index } = this.props;
        this.props.onDeleteVote(index);
    };

    render = () => {
        const { index, submitedBy, name, voteCount } = this.props;
        return (
            <div className="vote">
                <div className="vote-row">
                    <div className="vote-num-back"><span className="vote-num">{index}</span></div>
                    <div className="vote-message">
                        <span className="vote-name">{name}</span>
                        <span className="vote-author">{submitedBy.join(', ')}</span>
                    </div>
                    <span className="vote-count">{voteCount}</span>
                </div>
                <div>
                    <div className="vote-delete" onClick={() => this.onDeleteClick()}>X</div>
                </div>
            </div>
        );
    }
}