import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
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
                        <nav className="footerLinks">
                            <Link to="/blog" className="link">Blog</Link>
                            <Link to="/tutorial" className="link">Tutorials</Link>
                        </nav>
                    </section>
                </footer>
            </React.Fragment>
        );
    }
}

export default withRouter(Footer);