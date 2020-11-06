import React from 'react';

import withRouter from 'react-router-dom/withRouter';

import Particles from 'react-particles-js';

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import useTheme from '@material-ui/core/styles/useTheme';

import Header from './Header';
import SubHeader from './SubHeader';

function MarkdownRenderer(props) {

    const theme = useTheme();

    const useStyles = makeStyles({
        list: {
            "list-style": "circle",
        },
        listItem: {
            paddingTop: 0,
            paddingBottom: 0,
        },
        listText: {
            marginTop: 0,
            marginBottom: 0,
        }
      });

    const classes = useStyles();

    switch (props.contentType) {
        case 'h2':
            return (
                <Grid container justify="center">
                    <Grid item xs={11} md={10} lg={9}>
                        <Header header = {props.content}/>
                    </Grid>
                </Grid>
            );
        case 'h4':
            return(
                <Grid container justify="center">
                    <Grid item xs={11} md={10} lg={9}>
                        <SubHeader SubHeader = {props.content}/>
                    </Grid>
                </Grid>
            )
        case 'list':
            let items = props.content.split("::");
            return (
                <Grid container justify="center">
                    <Grid item xs={11} md={10} lg={9}>
                        <List dense={true} className={classes.list}>
                            {items.map(item =>
                                <ListItem className={classes.listItem}>
                                    <ListItemText className={classes.listText} primary={
                                        <Typography variant="body1">
                                            {item}
                                        </Typography>
                                    }/>
                                </ListItem>
                            )}
                        </List>
                    </Grid>
                </Grid>
            )
        case 'body':
            return (
                <Grid container justify="center">
                    <Grid item xs={11} md={10} lg={9}>
                        <Typography variant="body1" paragraph="true">
                            {props.content}
                        </Typography>
                    </Grid>
                </Grid>
            );
        case 'particle':
            return(
                <Grid container justify="center">
                    <Grid item xs={11} md={10} lg={9}>
                        <Card>
                            <Particles
                            params={{
                                    particles: {
                                        color: {
                                            value: theme.palette.primary.main,
                                        },
                                        links: {
                                            color: theme.palette.primary.main,
                                          },
                                    },
                                }
                            }
                            />
                        </Card>
                    </Grid>
                </Grid>
            );
    }
}

export default withRouter(MarkdownRenderer)