/**
 * Created by Mattyx on 29/03/18.
 */
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text} from 'native-base';
import List from "../ListComment/ListComment"

export default class Hello extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu'/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>Header</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content>
                    <List/>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>Footer</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    hello: {
        fontSize: 80,
        textAlign: 'center',
        // fontFamily: 'Open_sans',
        color: '#3498db',
        margin: 10,
    },
    button: {
        textAlign: 'center',
        color: '#2ecc71',
        margin: 5,
    },
});