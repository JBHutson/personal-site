import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
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
                        <Typography variant="h2">
                            {this.props.header}
                        </Typography>
                        <Typography variant="h4">
                            {this.props.subtitle}
                        </Typography>
                    </header>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <header>
                        <Typography variant="h2">
                            {this.props.header}
                        </Typography>
                    </header>
                </React.Fragment>
            );
        }
    }
}

export default withRouter(Header);