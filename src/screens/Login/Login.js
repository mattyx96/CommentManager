/**
 * Created by Mattyx on 12/04/18.
 */
import React, {Component} from "react";
import {StyleSheet, View} from "react-native";
import {
    Container,
    Header,
    Text,
    Toast,
    Left,
    Right,
    Body,
    Title,
    Subtitle,
    Icon,
    Content,
    Form,
    Item,
    Input,
    Label,
    Button
} from "native-base";
export default class Login extends Component {
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
                    <Subtitle> Login </Subtitle>
                    </Body>
                    <Right/>
                </Header>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input />
                        </Item>

                        <Button rounded style={styles.button} onPress={
                            () => {Toast.show({
                                  text: 'Login',
                                  buttonText: 'Okay'
                            })}
                            }>
                            <Text>Login</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
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