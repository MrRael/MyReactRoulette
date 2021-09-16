import React, { Component, Fragment } from 'react';
import { VoteTable } from './VoteTable';

export class VoteMain extends Component {
    static displayName = VoteMain.name;

    render = () => {
        return (
            <div>
                <h1>Vote page</h1>
                <VoteTable/>
            </div>
        );
    }
}