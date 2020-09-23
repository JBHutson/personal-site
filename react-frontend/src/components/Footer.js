import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import react from './React.png'
import post from './Postgres.png'
import flask from './Flask.png'
import git from './Octocat.png'
import mat from './Material-ui.png'
import './Footer.css'


class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <footer className="footerFlex">
                    <section className="footContainer">
                        <nav className="picLinks">
                            <a href="https://material-ui.com" title="Designed with Material-UI" className="img"><img src={mat}></img></a>
                            <a href="https://reactjs.org" title="Frontend with React" className="img"><img src={react}></img></a>
                            <a href="https://flask.palletsprojects.com/en/1.1.x/" title="Backend with Flask" className="img"><img src={flask}></img></a>
                            <a href="https://www.postgresql.org" title="Database with Postgres" className="img"><img src={post}></img></a>
                            <a href="https://github.com/JBHutson/personal-site" title="Source code on Github" className="img"><img src={git}></img></a>
                        </nav>
                    </section>
                </footer>
            </React.Fragment>
        );
    }
}

export default withRouter(Footer);