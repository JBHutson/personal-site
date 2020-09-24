import React from 'react';
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function SubHeader(props){
    return (
        <Box borderBottom={1} maxWidth="800px" ml="auto" mr="auto">
            <Typography variant="h4">
                {props.SubHeader}
            </Typography>
        </Box>
    )
}

export default withRouter(SubHeader);