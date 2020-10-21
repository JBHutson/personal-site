import React from 'react';
import withRouter from 'react-router-dom/withRouter';
import TutorialContent from './TutorialContent';

function TutorialPage() {

    return (
        <React.Fragment>
            <TutorialContent/>
        </React.Fragment>
    );
}


export default withRouter(TutorialPage);