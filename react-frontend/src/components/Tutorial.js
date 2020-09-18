import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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
                <Navbar/>
                <main>
                    <TutorialContent/>
                </main>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default withRouter(TutorialPage);