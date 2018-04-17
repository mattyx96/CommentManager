/**
 * Created by Mattyx on 03/04/18.
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Content, Container, Root} from 'native-base';
import {StackNavigator} from 'react-navigation';

import Reg from './screens/Registra/Registra';
import Hello from './screens/Hello/Hello';
import Contattaci from './screens/Contattaci/Contattaci';
import Cerca from './screens/CercaAttivita/CercaAttivita';
import Login from './screens/Login/Login';
import RegistraAtt from './screens/Registra/RegistraAttivita';


export default class App extends React.Component {

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
        Registra: {screen: Reg},
        Contattaci: {screen: Contattaci},
        Cerca: {screen: Cerca},
        Login: {screen: Login},
        RegistraAttivita: {screen: RegistraAtt},
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
