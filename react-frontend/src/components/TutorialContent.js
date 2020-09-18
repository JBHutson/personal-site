import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from './Header';

class TutorialContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Header header={'Tutorials'} subtitle={"Tutorials I think would be useful"}/>
            </React.Fragment>
        );
    }
}

export default withRouter(TutorialContent);