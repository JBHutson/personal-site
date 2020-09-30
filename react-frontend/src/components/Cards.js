import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: "2rem",
        paddingRight: "2rem",
    },
  });

function Cards(){
    const classes = useStyles();
    return (
        <Grid container justify="center" spacing={4} className={classes.gridContainer}>
            <Grid item xs={12} sm={6} md={4}>
                <Card raised="true">
                <CardContent>
                    <Typography variant="h2">
                        this is card
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card raised="true">
                <CardContent>
                    <Typography variant="h2">
                        this is card
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card raised="true">
                <CardContent>
                    <Typography variant="h2">
                        this is card
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card raised="true">
                <CardContent>
                    <Typography variant="h2">
                        this is card
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card raised="true">
                <CardContent>
                    <Typography variant="h2">
                        this is card
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card raised="true">
                <CardContent>
                    <Typography variant="h2">
                        this is card
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default withRouter(Cards)