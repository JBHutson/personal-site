import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Header.css'

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.subtitle) {
            return (
                <React.Fragment>
                    <header>
                        <div id="header">
                            <h1>
                                {this.props.header}
                            </h1>
                            <p className="subtitle">
                                {this.props.subtitle}
                            </p>
                        </div>
                    </header>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <header>
                        <div id="header">
                            <h1>
                                {this.props.header}
                            </h1>
                        </div>
                    </header>
                </React.Fragment>
            );
        }
    }
}

export default withRouter(Header);