import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from './Header';
import Cards from './Cards';

function PortfolioContent() {

    return (
        <React.Fragment>
            <Header header={'Portfolio'}/>
            <Cards/>
        </React.Fragment>
    );
}


export default withRouter(PortfolioContent);