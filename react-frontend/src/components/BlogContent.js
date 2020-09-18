import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from './Header';

class BlogContent extends Component {
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

export default withRouter(BlogContent);