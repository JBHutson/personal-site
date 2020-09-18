import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './Navbar.css'

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar">
                <div id="navContainer">
                    <div id="flex">
                        <ul id="navMenu">
                            <li><Link to="/" id="brand">James Hutson</Link></li>
                            <li className="navLink"><Link to="/about" className="link">About</Link></li>
                            <li><Link to="/blog" className="link">Blog</Link></li>
                            <li><Link to="/tutorial" className="link">Tutorials</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default withRouter(Navbar);