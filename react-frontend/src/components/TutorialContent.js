import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from './Header';

function TutorialContent() {

    return (
        <React.Fragment>
            <Header header={'Tutorials'} subtitle={"Tutorials I think would be useful"}/>
        </React.Fragment>
    );
}


export default withRouter(TutorialContent);