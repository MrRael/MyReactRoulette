import React, { Component } from 'react';
import './Vote.scss';

export class Vote extends Component {

    onDeleteVoteClick = () => {
        const { index } = this.props;
        this.props.onDeleteVote(index);
    };

    onDeleteAuthorClick = (event, indexAuthor) => {
        const { index, submitedBy } = this.props;
        this.props.onDeleteAuthorVote(index, submitedBy[indexAuthor]);
    };

    render = () => {
        const { index, submitedBy, name, voteCount } = this.props;
        return (
            <div className="vote">
                <div className="vote-row">
                    <div className="vote-num-back"><span className="vote-num">{index}</span></div>
                    <div className="vote-message">
                        <span className="vote-name">{name}</span>
                        <span className="vote-submited-by">
                            {submitedBy.map((author, index) => <span className="vote-author">{author}<span onClick={(event) => this.onDeleteAuthorClick(event, index)} className="vote-author-delete">X</span></span>)}
                        </span>
                    </div>
                    <span className="vote-count">{voteCount}</span>
                </div>
                <div>
                    <div className="vote-delete" onClick={() => this.onDeleteVoteClick()}>X</div>
                </div>
            </div>
        );
    }
}