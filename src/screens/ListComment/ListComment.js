import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Separator } from 'native-base';
export default class ListSeparatorExample extends Component {
    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <Separator bordered>
                        <Text>FORWARD</Text>
                    </Separator>
                    <ListItem >
                        <Text>Aaron Bennet</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Claire Barclay</Text>
                    </ListItem>
                    <ListItem last>
                        <Text>Kelso Brittany</Text>
                    </ListItem>
                    <Separator bordered>
                        <Text>MIDFIELD</Text>
                    </Separator>
                    <ListItem>
                        <Text>Caroline Aaron</Text>
                    </ListItem>
                </Content>
            </Container>
        );
    }
}