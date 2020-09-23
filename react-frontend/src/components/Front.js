import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Navbar from './Navbar';
import Lead from './Lead';
import Footer from './Footer';

class FrontPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Lead/>
            </React.Fragment>
        );
    }
}

export default withRouter(FrontPage);