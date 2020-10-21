import React from 'react';
import withRouter from 'react-router-dom/withRouter';
import BlogContent from './BlogContent';

function BlogPage() {
    return (
        <React.Fragment>
            <BlogContent/>
        </React.Fragment>
    );
}


export default withRouter(BlogPage);