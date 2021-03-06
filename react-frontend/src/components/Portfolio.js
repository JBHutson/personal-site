import React from 'react';

import withRouter from 'react-router-dom/withRouter';

import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Header from './Header';
import Projects from './Projects'
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
            <Header header={'Portfolio'} size={'h2'}/>
            <Grid container justify="center" spacing={4} className={classes.gridContainer}>
                <Grid item xs={12}>
                    <SubHeader SubHeader={'Projects'}/>
                </Grid>
            </Grid>
            <Projects/>
        </React.Fragment>
    );
}

export default withRouter(PortfolioPage);