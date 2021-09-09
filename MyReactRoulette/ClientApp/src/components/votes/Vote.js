import React, { Component } from 'react';

export class Vote extends Component {
    render = () => {
        const { index, name } = this.props;
        return (
            <div>
                <b>{index}</b> - {name}
            </div>
        );
    }
}