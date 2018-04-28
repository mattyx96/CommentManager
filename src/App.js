/**
 * Created by Mattyx on 03/04/18.
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Content, Container, Root} from 'native-base';
import {StackNavigator} from 'react-navigation';


import Hello from './screens/Hello/Hello';
import comment from "./screens/Comments/Comment";


export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fcm_token: ""
        };
    }

    render() {
        return (
            <Root>
                <RootNavigator/>
            </Root>
        );
    }
}


const RootNavigator = StackNavigator(
    {
        Hello: {screen: Hello},
        List: {screen: comment}
    },
    {
        initialRouteName: 'Hello',
        headerMode: "none",
    }
);

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
