/**
 * Created by Mattyx on 12/04/18.
 */
/**
 * Created by Mattyx on 12/04/18.
 */
import React, {Component} from "react";
import {View, StyleSheet, StatusBar} from "react-native";
import {
    Container,
    Header,
    Title,
    Toast,
    Content,
    Item,
    Input,
    Icon,
    Button,
    Left,
    Right,
    Body,
    Subtitle
} from "native-base";

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
                    <Subtitle> Cerca attività </Subtitle>
                    </Body>
                    <Right/>
                </Header>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search"/>
                        <Input placeholder="Search"/>
                        <Button transparent onPress={()=>{
                            Toast.show({
                                  text: 'Calcolando la tua posizione . . .'
                            })}
                            }>
                            <Icon name={"crosshairs-gps"} type={"MaterialCommunityIcons"}/>
                        </Button>
                    </Item>
                    {/*<Button transparent>*/}
                    {/*<Text>Search</Text>*/}
                    {/*</Button>*/}
                </Header>

                <Content>

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