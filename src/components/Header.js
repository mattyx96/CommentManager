/**
 * Created by Mattyx on 03/04/18.
 */

import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title } from 'native-base';
export default class HeaderApp extends Component {

    render() {
        return (
            <Container>
                <Header>
                    <Left/>
                    <Body>
                    <Title>Comment App</Title>
                    </Body>
                    <Right />
                </Header>
            </Container>
        );
    }
}