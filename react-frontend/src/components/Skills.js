import React from 'react';
import withRouter from 'react-router-dom/withRouter';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Header from './Header';
import Grid from '@material-ui/core/Grid';
import SubHeader from './SubHeader';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Python from '../assets/Python.svg';
import Java from '../assets/Java.svg';
import JavaScript from '../assets/JavaScript.svg';
import Django from '../assets/Django.svg';
import Flask from '../assets/Flask.svg';
import Material from '../assets/Material-ui.svg';
import ReactPic from '../assets/React.svg';
import HTML from '../assets/HTML.svg';
import CSS from '../assets/CSS.svg';
import Post from '../assets/PostGres.svg';
import Mongo from '../assets/MongoDB.svg';
import Linux from '../assets/Linux.svg';
import MacOS from '../assets/MacOS.svg';
import Git from '../assets/Git.svg';

const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: "2rem",
        paddingRight: "2rem",
        margin: 0,
        width: "100%",
    },
    media: {
        height: "20rem"
    },
  });

function SkillsPage() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Header header={'Skills'}/>
            <Grid container justify="center" spacing={4} className={classes.gridContainer}>
                <Grid item xs={12}>
                    <SubHeader SubHeader={'Languages'}/>
                </Grid>
            </Grid>
            <Grid container spacing={4} className={classes.gridContainer}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card raised="true" className={classes.card}>
                        <CardMedia
                        className={classes.media}
                        image={Python}
                        title="Python"
                        />
                        <CardContent>
                            <Typography variant="h5">
                                Python: Used on this site!
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card raised="true" className={classes.card}>
                        <CardMedia
                        className={classes.media}
                        image={Java}
                        title="Java"
                        />
                        <CardContent>
                            <Typography variant="h5">
                                Java
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card raised="true" className={classes.card}>
                        <CardMedia
                        className={classes.media}
                        image={JavaScript}
                        title="JavaScript"
                        />
                        <CardContent>
                            <Typography variant="h5">
                                JavaScript: Used on this site!
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card raised="true" className={classes.card}>
                        <CardMedia
                        className={classes.media}
                        image={HTML}
                        title="HTML"
                        />
                        <CardContent>
                            <Typography variant="h5">
                                HTML: Used on this site!
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card raised="true" className={classes.card}>
                        <CardMedia
                        className={classes.media}
                        image={CSS}
                        title="CSS"
                        />
                        <CardContent>
                            <Typography variant="h5">
                                CSS: Used on this site!
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid container justify="center" spacing={4} className={classes.gridContainer}>
                <Grid item xs={12}>
                    <SubHeader SubHeader={'Frameworks'}/>
                </Grid>
            </Grid>
            <Grid container spacing={4} className={classes.gridContainer}>
                <Grid item item xs={12} sm={6} md={4} lg={3}>
                    <Card raised="true" className={classes.card}>
                        <CardMedia
                        className={classes.media}
                        image={Django}
                        title="Django"
                        />
                        <CardContent>
                            <Typography variant="h5">
                                Django
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item item xs={12} sm={6} md={4} lg={3}>
                    <Card raised="true" className={classes.card}>
                        <CardMedia
                        className={classes.media}
                        image={Flask}
                        title="Flask"
                        />
                        <CardContent>
                            <Typography variant="h5">
                                Flask: Used on this site!
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item item xs={12} sm={6} md={4} lg={3}>
                    <Card raised="true" className={classes.card}>
                        <CardMedia
                        className={classes.media}
                        image={ReactPic}
                        title="React"
                        />
                        <CardContent>
                            <Typography variant="h5">
                                React: Used on this site!
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item item xs={12} sm={6} md={4} lg={3}>
                    <Card raised="true" className={classes.card}>
                        <CardMedia
                        className={classes.media}
                        image={Material}
                        title="Material-ui"
                        />
                        <CardContent>
                            <Typography variant="h5">
                                Material-UI: Used on this site!
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid container justify="center" spacing={4} className={classes.gridContainer}>
                <Grid item xs={12}>
                    <SubHeader SubHeader={'Databases'}/>
                </Grid>
            </Grid>
            <Grid container spacing={4} className={classes.gridContainer}>
                <Grid item item xs={12} sm={6} md={4} lg={3}>
                    <Card raised="true" className={classes.card}>
                        <CardMedia
                        className={classes.media}
                        image={Post}
                        title="Postgres"
                        />
                        <CardContent>
                            <Typography variant="h5">
                                Postgres
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item item xs={12} sm={6} md={4} lg={3}>
                    <Card raised="true" className={classes.card}>
                        <CardMedia
                        className={classes.media}
                        image={Mongo}
                        title="MongoDB"
                        />
                        <CardContent>
                            <Typography variant="h5">
                                MongoDB: Used on this site!
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid container justify="center" spacing={4} className={classes.gridContainer}>
                <Grid item xs={12}>
                    <SubHeader SubHeader={'Technologies'}/>
                </Grid>
            </Grid>
            <Grid container spacing={4} className={classes.gridContainer}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card raised="true" className={classes.card}>
                        <CardMedia
                        className={classes.media}
                        image={Linux}
                        title="Linux"
                        />
                        <CardContent>
                            <Typography variant="h5">
                                Linux
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card raised="true" className={classes.card}>
                        <CardMedia
                        className={classes.media}
                        image={MacOS}
                        title="MacOS"
                        />
                        <CardContent>
                            <Typography variant="h5">
                                MacOS: Used on this site!
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card raised="true" className={classes.card}>
                        <CardMedia
                        className={classes.media}
                        image={Git}
                        title="Git"
                        />
                        <CardContent>
                            <Typography variant="h5">
                                Git: Used on this site!
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}


export default withRouter(SkillsPage);