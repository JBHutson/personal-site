import React from 'react';
import Grid from '@material-ui/core/Grid';
import useTheme from '@material-ui/core/styles/useTheme';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Header from './Header';
import SubHeader from './SubHeader';
import Particles from 'react-particles-js';
import withRouter from 'react-router-dom/withRouter';

function MarkdownRenderer(props) {
    const theme = useTheme();

    switch (props.contentType) {
        case 'h2':
            return (
                <Grid container justify="center">
                    <Grid item xs={11} sm={9} md={7} lg={6}>
                        <Header header = {props.content}/>
                    </Grid>
                </Grid>
            );
        case 'h4':
            return(
                <Grid container justify="center">
                    <Grid item xs={11} sm={9} md={7} lg={6}>
                        <SubHeader SubHeader = {props.content}/>
                    </Grid>
                </Grid>
            )
        case 'list':
            let items = props.content.split(":");
            return (
                <Grid container justify="center">
                    <Grid item xs={11} sm={9} md={7} lg={6}>
                        <List dense={true}>
                            {items.map(item =>
                                <ListItem dense={true}>
                                    <ListItemText primary={item}/>
                                </ListItem>
                            )}
                        </List>
                    </Grid>
                </Grid>
            )
        case 'body':
            return (
                <Grid container justify="center">
                    <Grid item xs={11} sm={9} md={7} lg={6}>
                        <Typography variant="body1" paragraph="true">
                            {props.content}
                        </Typography>
                    </Grid>
                </Grid>
            );
        case 'particle':
            return(
                <Grid container justify="center">
                    <Grid item xs={11} sm={9} md={7} lg={6}>
                        <Header header={props.content}/>
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
                    </Grid>
                </Grid>
            );
    }
}

export default withRouter(MarkdownRenderer)