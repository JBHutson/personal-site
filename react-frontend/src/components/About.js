import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
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
                <AboutContent/>
            </React.Fragment>
        );
    }
}

export default withRouter(AboutPage);