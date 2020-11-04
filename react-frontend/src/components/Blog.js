import React from 'react';
import { useState, useEffect } from 'react';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CardContent from '@material-ui/core/CardContent';
import useTheme from '@material-ui/core/styles/useTheme';
import withRouter from 'react-router-dom/withRouter';
import DateTime from 'luxon/src/datetime';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Header from './Header';
import Button from '@material-ui/core/Button';

function BlogPage() {
    const [articles, setArticles] = useState();

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/api/articles')
        .then(res => {
            setArticles(res.data)
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
        card: {
            '&:hover': {
                background: theme.palette.action.hover
            }
        },
        button: {
            marginRight: "1rem"
        },
        progress: {
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
        }
      });

    const classes = useStyles();

    return (
        <React.Fragment>
            <Header header={'Blog'} subtitle={'Articles about various topics related to the tech industry'}/>
            <Grid container spacing={4} className={classes.gridContainer} justify={"center"}>
                {articles ? articles.map(article =>
                <Grid item xs={12} md={10} lg={8}>
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
                        <CardContent>
                            {article.tags.map(tag =>
                                <Button variant="contained" color="primary" className={classes.button}>
                                    {tag}
                                </Button>
                            )}
                        </CardContent>
                    </Card>
                </Grid>): <CircularProgress color="secondary" className={classes.progress}/>}
            </Grid>
        </React.Fragment>
    );
}


export default withRouter(BlogPage);