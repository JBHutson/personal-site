import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import HomeIcon from '@material-ui/icons/Home';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import BrightnessLowIcon from '@material-ui/icons/BrightnessLow';

function Navbar(props){
    const theme = useTheme();

    const useStyles = makeStyles((theme) => ({
        icons: {
            flexGrow: 1,
        },
        buttonText: {
            color: '#0e2904',
        }
    }));

    let screenSize = useMediaQuery(theme.breakpoints.down('sm'));
    let changeSize = screenSize ? 'small': 'large';

    const classes = useStyles();

        return (
            <AppBar position="sticky">
                    <Toolbar disableGutters={screenSize}>
                        <Box className={classes.icons}>
                            <IconButton component={RouterLink} to="/" size={changeSize}>
                                <HomeIcon color="secondary" size={changeSize}/>
                            </IconButton>
                        </Box>
                        <Box p={1}>
                            <Button variant="contained" color="primary" component={RouterLink} to="/portfolio" size={changeSize} className={classes.buttonText}>
                                Portfolio
                            </Button>
                        </Box>
                        <Box>
                            <Button variant="contained" color="primary" component={RouterLink} to="/blog" size={changeSize} className={classes.buttonText}>
                                Blog
                            </Button>
                        </Box>
                        <Box p={1}>
                            <Button variant="contained" color="primary" component={RouterLink} to="/tutorial" size={changeSize} className={classes.buttonText}>
                                Tutorials
                            </Button>
                        </Box>
                        <Box>
                            <IconButton name="Toggle light/Dark" onClick={() => {props.setDarkMode(!props.darkMode)}} size={changeSize}>
                                {props.darkMode ? <BrightnessLowIcon color="secondary" size={changeSize}/>: <Brightness7Icon color="secondary" size={changeSize}/>}
                            </IconButton>
                        </Box>
                    </Toolbar>
            </AppBar>
        );
    }

export default withRouter(Navbar);