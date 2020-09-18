import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Lead.css'

class Lead extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <section className="lead">
                    <h1>
                        Hello, I'm James
                    </h1>
                    <h2>
                        description text
                    </h2>
                </section>
            </React.Fragment>
        );
    }
}

export default withRouter(Lead);