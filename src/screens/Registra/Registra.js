/**
 * Created by Mattyx on 12/04/18.
 */
import React, {Component} from "react";
import {View, StyleSheet, StatusBar} from "react-native";
import {Container, Header, Title, Content, Icon, Button, Left, Right, Body, Subtitle, Text} from "native-base";

export default class Hello extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (

            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={()=>{this.props.navigation.goBack()}}>
                            <Icon name="md-arrow-round-back"/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>AttivitApp</Title>
                    <Subtitle> Registra Attività </Subtitle>
                    </Body>
                    <Right/>
                </Header>

                <Content>

                    <Button rounded style={styles.button} onPress={
                            () => this.props.navigation.navigate('RegistraAttivita')
                        }>
                        <Text>Registra la tua Attività</Text>
                    </Button>
                    <Button rounded style={styles.button} onPress={
                            () => this.props.navigation.navigate('Login')
                        }>
                        <Text>Accedi</Text>
                    </Button>
                </Content>
            </Container>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34495e',
        alignItems: 'center',
        justifyContent: 'center'
    },
    center: {
        alignSelf: 'center'
    },
    text: {
        color: '#000000',
        fontSize: 50,
        alignSelf: 'center'
    },
    button: {
        alignSelf: 'center',
        margin: 50,

    },
});