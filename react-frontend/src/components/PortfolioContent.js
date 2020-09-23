import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from './Header';

class PortfolioContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Header header={'Portfolio'}/>
            </React.Fragment>
        );
    }
}

export default withRouter(PortfolioContent);