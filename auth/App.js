/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header, Button, Spinner} from './src/components/common';
import {LoginForm} from './src/components/LoginForm';


export default class App extends Component {
    state = {loggedIn: null};

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDfwKnAeNKKGIZ4QtWTjD_N5iWAskulpbA',
            authDomain: 'auth-518fc.firebaseapp.com',
            databaseURL: 'https://auth-518fc.firebaseio.com',
            projectId: 'auth-518fc',
            storageBucket: 'auth-518fc.appspot.com',
            messagingSenderId: '903880864685'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({loggedIn: true});
            } else {
                this.setState({loggedIn: false});
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()}>
                        Log Out
                    </Button>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large"/>
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                {this.renderContent()}
            </View>
        );
    }
}
