import React, {Component} from 'react';
import {Container, Header, Content, Left, Right, Title, ListItem, Text, Separator, Button, Body} from 'native-base';
export default class ListSeparatorExample extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent
                                style={{
                                    fontSize:50
                                }}
                                onPress={
                                    () => this.props.navigation.goBack()
                                }>
                            <Text> go back </Text>
                        </Button>
                    </Left>
                    <Body>
                    <Title>Header</Title>
                    </Body>
                </Header>
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