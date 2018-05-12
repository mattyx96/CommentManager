/**
 * Created by Mattyx on 03/04/18.
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Content, Container, Root} from 'native-base';
import {StackNavigator} from 'react-navigation';


import Hello from './screens/Hello/Hello';
import comment from "./screens/Comments/Comment";
import firebase from "react-native-firebase";


export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fcm_token: ""
        };
    }

    componentDidMount() {
        // this.onTokenRefreshListener = firebase.messaging().onTokenRefresh(fcmToken:string => {
        //     // Process your token as required
        // }

        firebase.messaging().getToken()
            .then(fcmToken => {
                if (fcmToken) {
                    console.log("fcmToken: " + fcmToken);
                } else {
                    console.log("fcmToken: NON C'E'!!");
                }
            });
    }

    componentWillUnmount() {



        // this.onTokenRefreshListener();
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
