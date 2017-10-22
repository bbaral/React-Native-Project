/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// Index.ios.js -- place code in here for IOS
// Import a library to help create a component


import React, {Component} from 'react';
import {View} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


export default class App extends Component {
    render() {
        return (
            <View style={{ flex:1 }}>
                <Header headerText={'Albums'}/>
                <AlbumList/>
            </View>
        );
    }
}


