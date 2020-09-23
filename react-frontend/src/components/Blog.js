import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Navbar from './Navbar';
import BlogContent from './BlogContent';
import Footer from './Footer'

class BlogPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <BlogContent/>
            </React.Fragment>
        );
    }
}

export default withRouter(BlogPage);