import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Switch from '@material-ui/core/Switch';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import './Navbar.css'

const useStyles = makeStyles((theme) => ({
    root : {
        flexGrow: 1,
    },
    icons: {
        flexGrow: 1,
    },
}));

function Navbar(props){
    const classes = useStyles();
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
                            <Button variant="contained" component={RouterLink} color="primary" to="/portfolio">
                                Portfolio
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
                            <Switch checked={props.darkMode} onChange={() => props.setDarkMode(!props.darkMode)}/>
                        </Box>
                        <Box>
                            <AccountCircleIcon/>
                        </Box>
                    </Toolbar>
            </AppBar>
            </div>
        );
    }

export default withRouter(Navbar);