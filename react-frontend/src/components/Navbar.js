import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import './Navbar.css'

const styles = theme => ({
    root : {
        flexGrow: 1,
    },
    icons: {
        flexGrow: 1,
    },
});

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (
            <div class={classes.root}>
            <AppBar position="sticky">
                    <Toolbar>
                        <Box className={classes.icons}>
                        <Button variant="contained" color="primary" component={RouterLink} to="/">
                                James Hutson
                            </Button>
                        </Box>
                        <Box p={1}>
                            <Button variant="contained" component={RouterLink} color="primary" to="/about">
                                About
                            </Button>
                        </Box>
                        <Box>
                            <Button variant="contained" color="primary" component={RouterLink} to="/blog">
                                Blog
                            </Button>
                        </Box>
                        <Box p={1}>
                            <Button variant="contained" color="primary" component={RouterLink} to="/tutorial">
                                Tutorials
                            </Button>
                        </Box>
                        <Box>
                            <Switch/>
                        </Box>
                        <Box>
                            <AccountCircleIcon/>
                        </Box>
                    </Toolbar>
            </AppBar>
            </div>
        );
    }
}

export default withRouter(withStyles(styles, {withTheme: true})(Navbar));