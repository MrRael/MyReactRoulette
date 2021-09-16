import React, { Component } from 'react';
import { VoteLineElement } from './VoteLineElement';
import "./VoteLine.scss";

export class VoteLine extends Component {
    render = () => {
        const { voteData } = this.props;
        const newVoteDataSimple = voteData.flatMap((vote) => Array(vote.voteCount).fill(vote));
        const newVoteData = Array.from({length: Math.ceil(100 / newVoteDataSimple.length)}, () => newVoteDataSimple).flat();
        return (
        <div className="vote-line">
            {newVoteData.map((vote) => <VoteLineElement {...vote}></VoteLineElement>)}
        </div>
        );
    }
}