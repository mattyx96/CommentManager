import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text} from 'native-base';

export default class Hello extends Component {
    render() {
        return (
            <Container>
                <View style={styles.container}>
                    <View style={styles.box}>
                        <Text style={styles.text}>
                            Hi, Hitler
                        </Text>
                        <Button rounded style={styles.button} onPress={() => {
                            console.log("pressed");
                        }}>
                            <Text>Go</Text>
                        </Button>
                    </View>
                </View>
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
        center:{
            alignSelf: 'center'
        },
        text: {
            color: '#ecf0f1',
            fontSize: 50
        },
        button: {
            margin: 10,
            alignSelf: 'center',
            backgroundColor: '#3498db'
        },
        box: {
            padding: 20,
            backgroundColor: '#1abc9c',
            margin: 50,
            borderRadius: 20
        }
    })
;