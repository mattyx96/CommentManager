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
import axios from "axios/index";


export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fcm_token: "",
            errorMessage: ""
        };
    }

    tokenCheck() {
        firebase.messaging().getToken()
            .then(fcmToken => {
                if (fcmToken) {
                    this.setState({fcm_token: fcmToken});
                    console.log("token in the phone is : " + fcmToken);

                    if (this.state.fcm_token !== this.getTokenDb()){
                        console.log("the state token " + this.state.fcm_token + "is different from the db token" + this.getTokenDb() + "so update the db");
                        this.updateToken(this.state.fcm_token);
                    }else{
                        console.log("il token del telefono" + this.state.fcm_token + "é uguale a quello del db");
                    }

                } else {
                    alert("token_not_exist");
                }
            });
    }

    getTokenDb(){
        let token = '';
        axios.get("http://matteoomicini.drink-web.eu/api/get_token")
            .then(res => {
                token = res.data;
            }).catch((error) => {
                alert("token_error: " + error);
        });
        console.log("token in the db is : " + token);
        return token;
    }

    updateToken(fcmToken){
        console.log("update token...");
        axios.post("http://matteoomicini.drink-web.eu/api/update_token", {
            token: fcmToken
        })
            .catch((error) => {
                this.setState(
                    {
                        mode: "error",
                        errorMessage: error,
                    }
                );
                console.log("error after sending token: " + this.state.errorMessage)
            })
    }

    componentDidMount() {
        this.onTokenRefreshListener = firebase.messaging().onTokenRefresh(fcmToken => {
            this.updateToken(fcmToken).bind(this);
        });
        this.notificationListener = firebase.notifications().onNotification((notification: Notification) => {
            alert("New Comment: " + notification._body);
        });
        this.tokenCheck();
    }

    componentWillUnmount() {
        this.notificationListener();
        this.onTokenRefreshListener();
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
