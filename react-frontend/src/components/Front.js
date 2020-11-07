import React from 'react';

import withRouter from 'react-router-dom/withRouter';

import Typist from 'react-typist/dist/Typist';

import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';

import Header from './Header';
import SubHeader from './SubHeader';

function FrontPage(){

    return (
        <React.Fragment>
                <Grid container justify="center">
                    <Grid item xs={10}>
                        <Typography variant={"h3"} paragraph={true}>
                            <Typist cursor={{hideWhenDone: true, hideWhenDoneDelay: 3000}}>
                                Hey! I'm James Hutson! A Software Engineer in the RDU (Raleigh-Durham) area. I enjoy coding, digital art and 
                                pretending to understand sports so my friends don't realize i'm a nerd. 
                                Check out my blog if you're interested in math or techy stuff!
                            </Typist>
                        </Typography>
                    </Grid>
                </Grid>
        </React.Fragment>
    );
}

export default withRouter(FrontPage);