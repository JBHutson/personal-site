import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PortfolioContent from './PortfolioContent'

class PortfolioPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.setState({});
      }

    render() {
        return (
            <React.Fragment>
                <PortfolioContent/>
            </React.Fragment>
        );
    }
}

export default withRouter(PortfolioPage);