import React from 'react';
import withRouter from 'react-router-dom/withRouter';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import GitHubIcon from '@material-ui/icons/GitHub';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Typography from '@material-ui/core/Typography';
import Poker from '../assets/Poker.webp';
import PersonalSite from '../assets/PersonalSite.webp';
import Poster from '../assets/Poster.webp';
import Access from '../assets/Access.webp';

function Cards(){
    const theme = useTheme();

    const useStyles = makeStyles({
        gridContainer: {
            paddingLeft: "2rem",
            paddingRight: "2rem",
            margin: 0,
            width: "100%",
        },
        media: {
            height: 300,
        },
        card: {
            '&:hover': {
                background: theme.palette.action.hover
            }
        }
      });

    const classes = useStyles();

    return (
        <Grid container spacing={4} className={classes.gridContainer}>
            <Grid item xs={12} sm={6} md={4}>
                <Card raised="true" className={classes.card}>
                <CardContent>
                    <Typography variant="h5">
                        COVID-19 Dashboard - In Development
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Desktop GUI-based calculator that can give the hand and pot odds of any given Texas Hold'em hand. Built with
                        Python and the PyQt framework.
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton>
                        <GitHubIcon/>
                    </IconButton>
                </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card raised="true" className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={Access}
                    title="Access"
                />
                <CardContent>
                    <Typography variant="h5">
                        AccessSense - In Development
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Desktop GUI-based calculator that can give the hand and pot odds of any given Texas Hold'em hand. Built with
                        Python and the PyQt framework.
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card raised="true" className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={PersonalSite}
                    title="Personal Site"
                />
                <CardContent>
                    <Typography variant="h5">
                        Personal Site
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Developer website, for displaying my portfolio and skills as well as blog posts. Built with Flask, React and
                        Material-UI.
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton>
                        <GitHubIcon/>
                    </IconButton>
                </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card raised="true" className={classes.card}>
                <CardContent>
                    <Typography variant="h5">
                        StayClose
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Social media application that allowed users to sequester their user experience by acquaintance group to allow
                        for a more accurate digital representation of real life social circles. Built with Django, React and PostgreSQL.
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton href="https://github.com/JBHutson/StayClose">
                        <GitHubIcon/>
                    </IconButton>
                </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card raised="true" className={classes.card}>
                    <CardMedia
                    className={classes.media}
                    image={Poker}
                    title="Poker"
                    />
                <CardContent>
                    <Typography variant="h5">
                        Poker Odds Calculator
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Desktop GUI-based calculator that can give the hand and pot odds of any given Texas Hold'em hand. Built with
                        Python and the PyQt framework.
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton href="https://github.com/JBHutson/Poker">
                        <GitHubIcon/>
                    </IconButton>
                </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card raised="true" className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={Poster}
                    title="Poster"
                />
                <CardContent>
                    <Typography variant="h5">
                        Lick-o-Meter System
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        System for remotely monitoring behavioral experiments in rodents. Built with Arduino, Raspberry Pi,
                        and Python
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default withRouter(Cards)