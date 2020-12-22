import React from 'react';
import { useState, useEffect } from 'react';

import { withRouter } from 'react-router-dom';

import axios from 'axios';

import CircularProgress from '@material-ui/core/CircularProgress';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Markdown from './Markdown';

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
            {article ?
                <Markdown>{article.content}</Markdown>: <CircularProgress color="secondary"/>
            }
        </React.Fragment>
    );
}

export default withRouter(Article);