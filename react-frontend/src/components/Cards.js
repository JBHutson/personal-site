import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import GitHubIcon from '@material-ui/icons/GitHub';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Typography from '@material-ui/core/Typography';
import Poker from './Poker.png';

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
            height: 200,
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
                <Card raised="true">
                <CardContent>
                    <Typography variant="h5">
                        COVID-19 Dashboard
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton>
                        <GitHubIcon/>
                    </IconButton>
                    <IconButton>
                        <OpenInNewIcon/>
                    </IconButton>
                </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card raised="true">
                <CardContent>
                    <Typography variant="h2">
                        AccessSense
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton>
                        <GitHubIcon/>
                    </IconButton>
                    <IconButton>
                        <OpenInNewIcon/>
                    </IconButton>
                </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card raised="true">
                <CardContent>
                    <Typography variant="h5">
                        StayClose
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
                <Card raised="true">
                <CardContent>
                    <Typography variant="h2">
                        this is card
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton>
                        <GitHubIcon/>
                    </IconButton>
                    <IconButton>
                        <OpenInNewIcon/>
                    </IconButton>
                </CardActions>
                </Card>
            </Grid>
        </Grid>
    )
}

export default withRouter(Cards)