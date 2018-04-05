/**
 * Created by Mattyx on 03/04/18.
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Content, Container} from 'native-base';

import Hello from './screens/Hello/Hello';

export default class App extends React.Component {

    render() {
        return (
            <Hello/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#000000'
    }
});
