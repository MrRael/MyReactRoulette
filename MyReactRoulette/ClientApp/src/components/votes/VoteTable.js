import React, { Component } from 'react';
import { Vote } from './Vote';

export class VoteTable extends Component {
    static displayName = VoteTable.name;

    constructor(props) {
        super(props);
        this.state = {
            votes: [
                { index: 1, name: "test1" },
                { index: 2, name: "test2" },
                { index: 3, name: "test3" },
            ]
        };
    }    

    render() {
        const { votes } = this.state;
        return (
            <div>
                {votes.map(vote => <Vote {...vote}/>)}
            </div>
        );
    }
}