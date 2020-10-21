import React from 'react';
import withRouter from 'react-router-dom/withRouter';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SubHeader from './SubHeader';

function FrontContent() {

    return (
        <Box ml="auto" mr="auto">
        <Grid container justify="center">
            <Grid item xs={11} sm={9} md={7} lg={6}>
                <SubHeader SubHeader="Introduction"/>
            </Grid>
        </Grid>
        <Grid container justify="center">
            <Grid item xs={11} sm={9} md={7} lg={6}>
                <Typography variant="body1" paragraph="true">
                    I'm a Software Engineer in the RDU (Raleigh-Durham) area, And this is a website that I have built
                    to be able to show my work and hopefully help some people in the process.
                </Typography>
                <Typography variant="body1" paragraph="true">
                    Originally, I had intended simply to create a simple, one page portfolio exclusively to display projects for
                    networking and job search purposes. But as I looked around the web for inspiration on the design, I noticed that
                    a lot of the best personal dev websites had a blog component where they discussed solutions to common problems and
                    practicums for the use of industry tools. And, like any enterprising dev, I thought "I bet I could do that...", thus,
                    this site was born.
                </Typography>
                <Typography variant="body1" paragraph="true">
                    So, while this is going to include the standard portfolio and about me pages, I will also be including articles on
                    topics I find interesting or I think don't have well-written and fleshed out explanations. What I want to focus on
                    specifically is what I have 
                </Typography>
            </Grid>
        </Grid>
        </Box>
    )
}

export default withRouter(FrontContent);