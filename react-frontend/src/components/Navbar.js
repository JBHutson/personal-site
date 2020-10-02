import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import BrightnessLowIcon from '@material-ui/icons/BrightnessLow';


const useStyles = makeStyles((theme) => ({
    icons: {
        flexGrow: 1,
    },
}));

function Navbar(props){
    const theme = useTheme();
    let screenSize = useMediaQuery(theme.breakpoints.down('sm'));
    let changeSize = screenSize ? 'small': 'large';
    const classes = useStyles();
        return (
            <AppBar position="sticky">
                    <Toolbar>
                        <Box className={classes.icons}>
                            <Button variant="contained" color="primary" component={RouterLink} to="/" size={changeSize}>
                                James Hutson
                            </Button>
                        </Box>
                        <Box p={1}>
                            <Button variant="contained" color="primary" component={RouterLink} to="/portfolio" size={changeSize}>
                                Portfolio
                            </Button>
                        </Box>
                        <Box>
                            <Button variant="contained" color="primary" component={RouterLink} to="/blog" size={changeSize}>
                                Blog
                            </Button>
                        </Box>
                        <Box p={1}>
                            <Button variant="contained" color="primary" component={RouterLink} to="/tutorial" size={changeSize}>
                                Tutorials
                            </Button>
                        </Box>
                        <Box>
                            <IconButton onClick={() => {props.setDarkMode(!props.darkMode)}}>
                                {props.darkMode ? <BrightnessLowIcon color="secondary"/>: <Brightness7Icon color="secondary"/>}
                            </IconButton>
                        </Box>
                    </Toolbar>
            </AppBar>
        );
    }

export default withRouter(Navbar);