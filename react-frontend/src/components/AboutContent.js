import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from './Header';

class AboutContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Header header={'About'}/>
            </React.Fragment>
        );
    }
}

export default withRouter(AboutContent);