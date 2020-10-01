import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Header from './Header';
import Cards from './Cards';
import SubHeader from './SubHeader';

const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: "2rem",
        paddingRight: "2rem",
        margin: 0,
        width: "100%",
    },
    media: {
        height: 200,
    }
  });

function PortfolioContent() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Header header={'Portfolio'}/>
            <Grid container justify="center" spacing={4} className={classes.gridContainer}>
                <Grid item xs={12}>
                    <SubHeader SubHeader={'Open-Source/Community Projects'}/>
                </Grid>
            </Grid>
            <Grid container justify="center" spacing={4} className={classes.gridContainer}>
                <Grid item xs={12}>
                    <SubHeader SubHeader={'Personal Projects'}/>
                </Grid>
            </Grid>
            <Cards/>
        </React.Fragment>
    );
}


export default withRouter(PortfolioContent);