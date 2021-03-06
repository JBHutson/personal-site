import React from 'react';
import { useState, useEffect } from 'react';

import { Link as RouterLink } from 'react-router-dom';
import withRouter from 'react-router-dom/withRouter';

import axios from 'axios';
import DateTime from 'luxon/src/datetime';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import useTheme from '@material-ui/core/styles/useTheme';

import Header from './Header';

function BlogPage() {
    const [articles, setArticles] = useState();

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/api/articles')
        .then(res => {
            setArticles(res.data)
            console.log(res.data)
        })
    }, [false])

    const theme = useTheme();

    const useStyles = makeStyles({
        gridContainer: {
            paddingLeft: "2rem",
            paddingRight: "2rem",
            margin: 0,
            width: "100%",
        },
        tagGridContainer: {
            margin: 0,
            width: "100%",
        },
        card: {
            '&:hover': {
                background: theme.palette.action.hover
            }
        },
        tagCard: {
            background: theme.palette.primary.main
        },
        progress: {
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
        },
        tags: {
            paddingLeft: "16px",
            paddingBottom: "16px",
            paddingRight: "16px",
            paddingTop: 0,
        },
      });

    const classes = useStyles();

    return (
        <React.Fragment>
                    <Header header={'Blog'} size={'h2'}/>
                        <Grid container spacing={4} className={classes.gridContainer} justify={"center"}>
                            {articles ? articles.map(article =>
                                <Grid item xs={11}>
                                    <Card raised="true" className={classes.card}>
                                        <Link component={RouterLink} to={"/blog/" + article.slug}>
                                            <CardContent>
                                                <Typography variant="h5">
                                                    {article.title}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    {DateTime.fromMillis(article.publish_date.$date).toLocaleString(DateTime.DATE_FULL)}
                                                </Typography>
                                            </CardContent>
                                        </Link>
                                        <CardContent className={classes.tags}>
                                            <Grid container justify="left" spacing={2} className={classes.tagGridContainer}>
                                                {article.tags.map(tag =>
                                                <Grid item xs={11} sm={6} md={3}>
                                                    <Card raised="true" className={classes.tagCard}>
                                                        <CardContent>
                                                            <Typography variant="body3">
                                                                {tag}
                                                            </Typography>
                                                        </CardContent>
                                                    </Card>
                                                </Grid>
                                                )}
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>): <CircularProgress color="secondary" className={classes.progress}/>}
                        </Grid>
        </React.Fragment>
    );
}


export default withRouter(BlogPage);