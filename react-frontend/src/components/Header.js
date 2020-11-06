import React from 'react';

import withRouter from 'react-router-dom/withRouter';

import Typist from 'react-typist';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


function Header(props) {
        return (
            <React.Fragment>
                <header>
                    <Box display="flex" justifyContent="center" mt="2rem">
                        <Typography variant="h2">
                            <Typist cursor={{hideWhenDone: true, hideWhenDoneDelay: 3000}}>
                                {props.header}
                            </Typist>
                        </Typography>
                    </Box>
                </header>
            </React.Fragment>
        );
    }


export default withRouter(Header);