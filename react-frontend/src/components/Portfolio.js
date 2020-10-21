import React from 'react';
import withRouter from 'react-router-dom/withRouter';
import PortfolioContent from './PortfolioContent'

function PortfolioPage() {

    return (
        <React.Fragment>
            <PortfolioContent/>
        </React.Fragment>
    );
}

export default withRouter(PortfolioPage);