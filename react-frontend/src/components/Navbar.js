import React from 'react';

import Link from 'react-router-dom/Link';
import withRouter from 'react-router-dom/withRouter';

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Toolbar from '@material-ui/core/Toolbar';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/core/styles/useTheme';

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
                            <IconButton component={Link} to="/" size={changeSize}>
                                <HomeIcon color="secondary" size={changeSize}/>
                            </IconButton>
                        </Box>
                        <Box p={1}>
                            <Button variant="outlined" color="secondary" component={Link} to="/portfolio" size={changeSize} className={classes.buttonText}>
                                Portfolio
                            </Button>
                        </Box>
                        <Box>
                            <Button variant="outlined" color="secondary" component={Link} to="/blog" size={changeSize} className={classes.buttonText}>
                                Blog
                            </Button>
                        </Box>
                        <Box p={1}>
                            <Button variant="outlined" color="secondary" component={Link} to="/skills" size={changeSize} className={classes.buttonText}>
                                Skills
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