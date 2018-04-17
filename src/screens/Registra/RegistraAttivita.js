import React, {Component} from "react";
import {Platform} from "react-native";
import {
    Container,
    List,
    ListItem,
    Header,
    Title,
    Content,
    Button,
    Icon,
    Right,
    Body,
    Left,
    Picker,
    Form
} from "native-base";
export default class PickerCustomHeaderTextExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected3: "key3"
        };
    }

    onValueChange3(value: string) {
        this.setState({
            selected3: value
        });
    }

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back"/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>Custom Header Title</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Form>
                        <List horizzontal={true}>
                            <ListItem itemDivider>
                                <Picker
                                    mode="dropdown"
                                    iosHeader="Your Header"
                                    iosIcon={<Icon name="ios-arrow-down-outline" />}
                                    style={{ flex:1 }}
                                    selectedValue={this.state.selected3}
                                    onValueChange={this.onValueChange3.bind(this)}
                                >
                                    <Picker.Item label="Wallet" value="key0"/>
                                    <Picker.Item label="ATM Card" value="key1"/>
                                    <Picker.Item label="Debit Card" value="key2"/>
                                    <Picker.Item label="Credit Card" value="key3"/>
                                    <Picker.Item label="Net Banking" value="key4"/>
                                </Picker>
                            </ListItem>
                            <ListItem >
                                <Picker
                                    mode="dropdown"
                                    iosHeader="Your Header"
                                    iosIcon={<Icon name="ios-arrow-down-outline" />}
                                    style={{ flex:1 }}
                                    selectedValue={this.state.selected3}
                                    onValueChange={this.onValueChange3.bind(this)}
                                >
                                    <Picker.Item label="Wallet" value="key0"/>
                                    <Picker.Item label="ATM Card" value="key1"/>
                                    <Picker.Item label="Debit Card" value="key2"/>
                                    <Picker.Item label="Credit Card" value="key3"/>
                                    <Picker.Item label="Net Banking" value="key4"/>
                                </Picker>
                            </ListItem>
                            <ListItem>
                                <Picker
                                    mode="dropdown"
                                    iosHeader="Your Header"
                                    iosIcon={<Icon name="ios-arrow-down-outline" />}
                                    style={{ flex:1 }}
                                    selectedValue={this.state.selected3}
                                    onValueChange={this.onValueChange3.bind(this)}
                                >
                                    <Picker.Item label="Wallet" value="key0"/>
                                    <Picker.Item label="ATM Card" value="key1"/>
                                    <Picker.Item label="Debit Card" value="key2"/>
                                    <Picker.Item label="Credit Card" value="key3"/>
                                    <Picker.Item label="Net Banking" value="key4"/>
                                </Picker>
                            </ListItem>
                        </List>
                    </Form>
                </Content>
            </Container>
        );
    }
}