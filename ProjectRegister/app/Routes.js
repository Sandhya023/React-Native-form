import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import SignUp from './components/SignUp';
import SignIn from './components/SignIn';


export default class Routes extends React.Component {
    render() {
        return(
            <Router>
                <Stack key="root">
                    <Scene key="login" component={SignIn} title="SignIn" initial={true}/>
                    <Scene key="register" component={SignUp} title="SignUp" />

                </Stack>
            </Router>
        )
    }

}