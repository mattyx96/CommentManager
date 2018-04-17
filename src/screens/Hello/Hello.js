import React, {Component} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {
    Container,
    Header,
    Title,
    Icon,
    Content,
    Footer,
    FooterTab,
    Button,
    Left,
    Right,
    Body,
    Subtitle,
    Text
} from 'native-base';

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
                        <Button transparent onPress={()=>{}}>
                            <Icon name={"md-home"}/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>AttivitApp</Title>
                    <Subtitle> Home </Subtitle>
                    </Body>
                    <Right/>
                </Header>

                <Content>
                    <Text style={styles.text}>
                        Benvenuto
                    </Text>

                    <Button rounded style={styles.button} onPress={
                            () => this.props.navigation.navigate('Registra')
                        }>
                        <Text>Registra la tua Attività</Text>
                    </Button>
                    <Button rounded style={styles.button} onPress={
                            () => this.props.navigation.navigate('Cerca')
                        }>
                        <Text>Cerca Attività</Text>
                    </Button>
                    <Button rounded style={styles.button} onPress={
                            () => this.props.navigation.navigate('Contattaci')
                        }>
                        <Text>Contattaci</Text>
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