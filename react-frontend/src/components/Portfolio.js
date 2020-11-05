import React from 'react';

import withRouter from 'react-router-dom/withRouter';

import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Cards from './Cards';
import Header from './Header';
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

function PortfolioPage() {

    const classes = useStyles();
    return (
        <React.Fragment>
            <Header header={'Portfolio'}/>
            <Grid container justify="center" spacing={4} className={classes.gridContainer}>
                <Grid item xs={12}>
                    <SubHeader SubHeader={'Projects'}/>
                </Grid>
            </Grid>
            <Cards/>
        </React.Fragment>
    );
}

export default withRouter(PortfolioPage);