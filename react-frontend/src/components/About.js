import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from './Navbar';
import AboutContent from './AboutContent'
import Footer from './Footer'

class AboutPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.setState({});
      }

    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <main>
                    <AboutContent/>
                </main>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default withRouter(AboutPage);