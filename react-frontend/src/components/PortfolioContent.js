import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from './Header';

function PortfolioContent() {

    return (
        <React.Fragment>
            <Header header={'Portfolio'}/>
        </React.Fragment>
    );
}


export default withRouter(PortfolioContent);