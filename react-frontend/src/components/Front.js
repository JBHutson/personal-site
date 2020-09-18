import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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
                <Navbar/>
                <main>
                    <Lead/>
                </main>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default withRouter(FrontPage);