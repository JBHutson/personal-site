import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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
                <Navbar/>
                <main>
                    <BlogContent/>
                </main>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default withRouter(BlogPage);