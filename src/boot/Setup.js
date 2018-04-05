/**
 * Created by Mattyx on 03/04/18.
 */

import * as Expo from "expo";
import React, {Component} from "react";
import {StyleSheet, Text, View} from 'react-native';
import App from "../App";

export default class Setup extends Component {
    constructor() {
        super();
        this.state = {
            isReady: false
        };
    }

    componentWillMount() {
        this.loadFonts();
    }

    async loadFonts() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
        });
        this.setState({isReady: true});
    }

    render() {
        if (!this.state.isReady) {
            return (
                <Text>loading expo</Text>
            );
        }
        return (
            <App/>
        );
    }
}