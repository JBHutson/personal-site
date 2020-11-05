import React from 'react';
import withRouter from 'react-router-dom/withRouter';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useTheme from '@material-ui/core/styles/useTheme';
import makeStyles from '@material-ui/core/styles/makeStyles';

function Login(props){

    const theme = useTheme();

    const useStyles = makeStyles({
        title: {
            paddingBottom: "2rem",
        },
        field: {
            paddingRight: "1rem",
        },
        topMargin: {
            marginTop: "1rem",
        }
      });

    const classes = useStyles();

    return (
        <Grid container justify="center">
            <Grid item xs={4}>
                <Card raised="true" className={classes.topMargin}>
                    <CardContent>
                        <Typography className={classes.title}>
                            Login
                        </Typography>
                        <form noValidate autoComplete="off">
                            <TextField id="username" label="Username" variant="outlined" className={classes.field}/>
                            <TextField id="password" label="Password" variant="outlined" />
                        </form>
                        <Button variant="contained" color="primary" className={classes.topMargin}>
                            Login
                        </Button>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default withRouter(Login);