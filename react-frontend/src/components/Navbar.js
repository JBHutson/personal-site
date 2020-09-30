import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const useStyles = makeStyles((theme) => ({
    root : {
        flexGrow: 1,
    },
    icons: {
        flexGrow: 1,
    },
}));

function Navbar(props){
    const theme = useTheme();
    let screenSize = useMediaQuery(theme.breakpoints.down('sm'));
    let changeSize = screenSize ? 'small': 'large';
    let checked = props.darkMode ? 'Dark': 'Light';
    const classes = useStyles();
        return (
            <div class={classes.root}>
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
                            <FormControlLabel
                                control={<Switch checked={props.darkMode} onChange={() => props.setDarkMode(!props.darkMode)} size={changeSize}/>}
                                label={checked}
                                labelPlacement="bottom"
                            />
                        </Box>
                    </Toolbar>
            </AppBar>
            </div>
        );
    }

export default withRouter(Navbar);