import React from 'react';

import withRouter from 'react-router-dom/withRouter';

import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Header from './Header';
import SubHeader from './SubHeader';

function FrontPage(){

    const useStyles = makeStyles({
        mainPaper: {
            marginTop: "2rem",
            marginBottom: "2rem",
        },
      });

    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid container justify="center">
                <Grid item xs={11} sm={10} md={9} lg={8}>
                <Paper elevation={10} className={classes.mainPaper}>
                <Grid container justify="center">
                    <Grid item xs={10}>
                        <Header header="Hey! I'm James Hutson!"/>
                    </Grid>
                </Grid>
                <Grid container justify="center">
                    <Grid item xs={11} sm={10} md={9} lg={8}>
                        <SubHeader SubHeader="Introduction"/>
                    </Grid>
                </Grid>
                <Grid container justify="center">
                    <Grid item xs={11} sm={10} md={9} lg={8}>
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
                        <Typography variant="body1" paragraph="true">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec risus ante, consequat id lorem in, elementum tempor tortor. Aliquam felis lacus, suscipit sed tempor porttitor, semper eu nibh. Vestibulum ut scelerisque mauris. Phasellus eu convallis orci, non vehicula elit. Etiam tempor bibendum justo, a accumsan ipsum pellentesque vel. Ut ante felis, semper ut enim at, elementum facilisis velit. Fusce mattis, enim at dapibus auctor, velit felis cursus magna, quis suscipit sem nunc at felis. Morbi rutrum at neque sit amet sagittis. Duis placerat vulputate tellus non convallis. In hac habitasse platea dictumst. Morbi id dignissim orci. Vivamus tempus libero et hendrerit vehicula. Donec mollis magna massa, quis convallis sapien tincidunt vel. Pellentesque a libero enim.

Cras molestie urna posuere euismod cursus. Suspendisse consectetur enim est, non tincidunt ex porta ut. Sed eu tellus hendrerit, facilisis elit non, eleifend justo. Pellentesque vehicula nibh in massa eleifend, at efficitur ante hendrerit. Integer nec eros fermentum risus laoreet laoreet. Praesent rhoncus quam lacus, id tincidunt risus venenatis at. Integer vestibulum nec quam et congue. In imperdiet libero ut tortor commodo faucibus. Nulla aliquet sollicitudin orci quis tincidunt. Donec volutpat ligula urna, vestibulum eleifend enim elementum eget. Integer ac quam iaculis, imperdiet elit id, mattis enim. Maecenas et libero nunc. Ut fermentum quis dui eget pretium. Vivamus ut pellentesque leo.

Curabitur placerat convallis gravida. Proin eget quam at mauris bibendum dictum. Sed posuere convallis egestas. Etiam fermentum egestas ligula. Praesent cursus, mauris ac ultrices gravida, purus enim facilisis nisl, sed condimentum dolor diam vel erat. Aliquam id metus vitae tellus vulputate ornare. Quisque tempor hendrerit elit eget tincidunt. Vestibulum sagittis interdum odio vel vestibulum. Nulla congue tincidunt imperdiet.

Donec interdum laoreet dolor, a tristique massa porta lacinia. In feugiat pretium sem ut dapibus. Suspendisse potenti. Vivamus nec est elementum, tincidunt arcu at, tempus metus. Nulla sollicitudin urna vitae sem eleifend, non efficitur justo elementum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent consequat commodo ante a ornare. Nulla euismod in orci vel convallis. Ut eu ultrices elit. Donec eget gravida tellus. Sed non venenatis lectus, quis euismod ex. Maecenas sodales elementum mi, at porttitor nunc rhoncus et. Sed quis tellus tortor. In iaculis feugiat aliquam. In hac habitasse platea dictumst. Nam arcu neque, accumsan vestibulum faucibus tristique, convallis ac est.

Vivamus gravida turpis nec lacinia finibus. Proin ac tortor tortor. Donec consequat metus a finibus dapibus. Nam magna tellus, varius ac lorem nec, vestibulum rutrum felis. Mauris rhoncus elit a nulla ullamcorper, a faucibus lacus malesuada. Nulla in lacus a purus sagittis ultricies. Nam consequat laoreet felis in cursus. Aenean non ultricies libero. Nulla nunc nisl, semper nec dolor non, dignissim sodales felis. Aenean sollicitudin nec ligula et dictum. Sed placerat purus massa, eget euismod est condimentum ut.
                        </Typography>
                    </Grid>
                </Grid>
                </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default withRouter(FrontPage);