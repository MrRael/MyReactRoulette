import React, { Component, Fragment } from 'react';
import { Vote } from './Vote';
import { VoteControl } from './VoteControl';
import { VoteLine } from './VoteLine';
import './VoteTable.scss';

export class VoteTable extends Component {
    static displayName = VoteTable.name;

    constructor(props) {
        super(props);
        this.state = {
            isStarted: false,
            votes: [
                { index: 2, submitedBy: ["IV@N"], name: "test3", voteCount: 1 },
                { index: 1, submitedBy: ["Гриша"], name: "test2", voteCount: 1 },
                { index: 0, submitedBy: ["Serj", "Nikitos"], name: "test1", voteCount: 2 }
            ]
        };
    }    

    onSubmit = (voteName, submitedBy) => {
        if (this.state.votes.find(x => x.name === voteName)) {
            this.setState((state) => {
                const votes = state.votes.map((vote) =>                
                    vote.name === voteName ? {...vote, submitedBy: [...vote.submitedBy, submitedBy], voteCount: vote.voteCount + 1} : vote
                );            
                return { votes };
            });
        } else {
            const newVote = {
                index: this.state.votes.length,
                submitedBy: [submitedBy],
                name: voteName,
                voteCount: 1
            }
            const newVotes = [newVote, ...this.state.votes];
            this.setState({votes: newVotes});
        }
        console.log(voteName, submitedBy);
    };
    
    onDeleteVote = (index) => {
        const newVotes = this.state.votes.filter(x => x.index !== index);
        var newIndex = 0;        
        newVotes.forEach(x => {
            x.index = newVotes.length - ++newIndex;
        });
        this.setState({votes: newVotes});
    };

    onDeleteAuthorVote = (index, author) => {
        const vote = this.state.votes.find(x => x.index === index);
        const newSubmitedBy = vote.submitedBy.filter(x => x !== author);
        if (newSubmitedBy.length > 0) {
            const newVotes = this.state.votes.map((x, i) => {
                if (x.index === index) { 
                    x.submitedBy = newSubmitedBy;
                    x.voteCount = newSubmitedBy.length;
                }
                return x;
            });
            this.setState({ votes: newVotes });
        } else {
            this.onDeleteVote(index);
        }
        
    };

    onButtonClick = () => {
        this.setState({isStarted: true});
    };
    
    render = () => {
        const { isStarted, votes } = this.state;
        return (
            <div>
                {isStarted ? <VoteLine voteData={votes}/> : <Fragment/>}
                <button onClick={this.onButtonClick}>Запустить голосование</button>
                <div>
                    <VoteControl onSubmit={this.onSubmit}></VoteControl>
                </div>
                <div className="main-vote-table">
                    {votes.map((vote) => <Vote onDeleteAuthorVote={this.onDeleteAuthorVote} onDeleteVote={this.onDeleteVote} key={vote.index} {...vote}/>)}
                </div>
            </div>
        );
    }
}