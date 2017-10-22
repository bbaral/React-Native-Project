/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';
import { LoginForm } from './src/components/LoginForm';

export default class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDfwKnAeNKKGIZ4QtWTjD_N5iWAskulpbA',
            authDomain: 'auth-518fc.firebaseapp.com',
            databaseURL: 'https://auth-518fc.firebaseio.com',
            projectId: 'auth-518fc',
            storageBucket: 'auth-518fc.appspot.com',
            messagingSenderId: '903880864685'
        });
    }
  render() {
    return (
      <View>
          <Header headerText="Authentication" />
          <LoginForm />
      </View>
    );
  }
}
