import React from 'react';

import withRouter from 'react-router-dom/withRouter';

import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';

import flask from '../assets/Flask.svg';
import git from '../assets/Octocat.svg';
import mat from '../assets/Material-ui.svg';
import mongo from '../assets/MongoDB.svg';
import react from '../assets/React.svg';

import './Footer.css'

function Footer() {

    const theme = useTheme();

    const useStyles = makeStyles({
        paper: {
            background: theme.palette.background.default,
        },
      });

    const classes = useStyles();

    return (
        <React.Fragment>
            <Paper className={classes.paper}>
            <footer className="footerFlex">
                <section className="footContainer">
                    <nav className="picLinks">
                        <a href="https://material-ui.com" title="Designed with Material-UI" className="img"><img alt="Material-UI Logo"src={mat}></img></a>
                        <a href="https://reactjs.org" title="Frontend with React" className="img"><img alt="React Logo" src={react}></img></a>
                        <a href="https://flask.palletsprojects.com/en/1.1.x/" title="Backend with Flask" className="img"><img alt="Flask Logo" src={flask}></img></a>
                        <a href="https://www.postgresql.org" title="Database with MongoDB" className="img"><img alt="Postgres Logo" src={mongo}></img></a>
                        <a href="https://github.com/JBHutson/personal-site" title="Source code on Github" className="img"><img alt="Github Logo" src={git}></img></a>
                    </nav>
                </section>
            </footer>
            </Paper>
        </React.Fragment>
    );
}


export default withRouter(Footer);