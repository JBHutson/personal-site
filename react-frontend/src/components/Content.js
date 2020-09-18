import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Content extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Header header={'Blog'} subtitle={'Articles about various topics related to the tech industry'}/>
            </React.Fragment>
        );
    }
}

export default withRouter(Content);