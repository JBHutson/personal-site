import React from 'react';
import { useState, useEffect } from 'react';

import { withRouter } from 'react-router-dom';

import axios from 'axios';

import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Paper from '@material-ui/core/Paper';

import MarkdownRenderer from './MarkdownRenderer';

function Article(props) {

    const useStyles = makeStyles({
        mainPaper: {
            marginTop: "2rem",
            marginBottom: "2rem",
        },
      });

    const classes = useStyles();

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
            <Grid container justify="center">
                <Grid item xs={11} sm={10} md={9} lg={8}>
                    <Paper elevation={10} className={classes.mainPaper}>
                        {article ? article.content.map(articleContent =>
                            <MarkdownRenderer contentType={articleContent.content_type} content={articleContent.content}/>): <CircularProgress color="secondary"/>
                        }
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default withRouter(Article);