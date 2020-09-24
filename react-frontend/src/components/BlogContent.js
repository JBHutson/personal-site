import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from './Header';

function BlogContent() {

    return (
        <React.Fragment>
            <Header header={'Blog'} subtitle={'Articles about various topics related to the tech industry'}/>
        </React.Fragment>
    );
}


export default withRouter(BlogContent);