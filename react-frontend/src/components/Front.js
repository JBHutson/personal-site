import React from 'react';
import withRouter from 'react-router-dom/withRouter';
import Header from './Header';
import FrontContent from './FrontContent';

function FrontPage(){

    return (
        <React.Fragment>
            <Header header="Hey! I'm James Hutson"/>
            <FrontContent/>
        </React.Fragment>
    );
}

export default withRouter(FrontPage);