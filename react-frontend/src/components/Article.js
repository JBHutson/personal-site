import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import MarkdownRenderer from './MarkdownRenderer';

function Article(props) {

    const [article, setArticle] = useState();

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/api/article', {
            params: {
                slug: props.match.params.slug
            }
        })
        .then(res => {
            setArticle(res.data)
        })
    }, [false])

    return (
        <React.Fragment>
            <Box ml="auto" mr="auto">
                {article ? article.content.map(articleContent => <MarkdownRenderer contentType={articleContent.content_type} content={articleContent.content}/>): 'Loading...'}
            </Box>
        </React.Fragment>
    );
}

export default withRouter(Article);