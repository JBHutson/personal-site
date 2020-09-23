import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Navbar from './Navbar';
import TutorialContent from './TutorialContent';
import Footer from './Footer';

class TutorialPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <TutorialContent/>
            </React.Fragment>
        );
    }
}

export default withRouter(TutorialPage);