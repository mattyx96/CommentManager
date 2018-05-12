import React, {Component} from 'react';
import {View, StyleSheet, StatusBar, ImageBackground} from 'react-native';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text} from 'native-base';

export default class Hello extends Component {

    constructor() {
        super();
        this.state = {
            time: "",
        };
    }

    componentDidMount() {
        let date = new Date();
        var hour = date.getHours();
        this.setState({
            time: hour
        })
    }

    render() {
        return (
            <Container>
                <ImageBackground
                    style={{
                       flex: 1, height: "100%", width: "100%",
                    }}
                    source={require('../../assets/images/background_flat_green_yellow.png')}
                    resizeMode='cover'
                >

                <StatusBar
                    backgroundColor="#1abc9c"
                    barStyle="light-content"
                />
                <View style={styles.container}>
                    <View style={styles.box}>
                        <Text style={{
                                alignSelf: 'center',
                                fontSize:25
                            }}>{this.getHello()}
                        </Text>
                        <Text style={styles.text}>
                            Sir
                        </Text>

                        <Button rounded style={styles.button} onPress={
                            () => this.props.navigation.navigate('List')
                        }>
                            <Text style={{
                                color: "#03120F"
                            }}>Go</Text>
                        </Button>
                    </View>
                </View>
                </ImageBackground>
            </Container>

        );
    }

    getHello() {

        t = this.state.time;
        if ((t >= "00") && (t < "06")) {
            return "Vada a dormire";
        }
        if ((t >= "06") && (t < "13")) {
            return "Good morning";
        }
        if ((t >= "13") && (t < "18")) {
            return "Good afternoon";
        }
        if ((t >= "18") && (t < "24")) {
            return "Buona";
        }
    }
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        },
        center: {
            alignSelf: 'center'
        },
        text: {
            fontSize: 50,
            alignSelf: 'center'
        },
        button: {
            margin: 10,
            alignSelf: 'center',
            backgroundColor: '#E6E23C'
        },
        box: {
            padding: 20,
            backgroundColor: '#1abc9c',
            margin: 50,
            borderRadius: 20
        }
    })
    ;