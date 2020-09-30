import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import GitHubIcon from '@material-ui/icons/GitHub';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: "2rem",
        paddingRight: "2rem",
        margin: 0,
        width: "100%",
    },
  });

function Cards(){
    const classes = useStyles();
    return (
        <Grid container spacing={4} className={classes.gridContainer}>
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