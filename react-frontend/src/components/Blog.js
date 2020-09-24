import React from 'react';
import { withRouter } from 'react-router-dom';
import BlogContent from './BlogContent';

function BlogPage() {
    return (
        <React.Fragment>
            <BlogContent/>
        </React.Fragment>
    );
}


export default withRouter(BlogPage);