import Item from './Item';

import React, {Component} from "react";
import axios from 'axios'
import {ListView, View, StatusBar, StyleSheet} from "react-native";
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    List,
    ListItem,
    Text,
    Left,
    Right,
    Body,
    Spinner
} from "native-base";


class ListComment extends Component {

    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            mode: "loading",
            listViewData: {},
            errorMessage: "",
        };
    }

    loadContent() {
        this.setState({mode: "loading"});
        axios.get("http://matteoomicini.drink-web.eu/api/get_all_comments")
            .then(res => {

                if (res.data === "no_comments") {
                    console.log("data:", res.data);
                    this.setState(
                        {
                            mode: "no_comments",
                            errorMessage: "you have validated everything.",
                        });
                }
                else {
                    this.setState(
                        {
                            mode: "not_loading",
                            listViewData: res.data
                        });
                }
            }).catch((error) => {
            this.setState(
                {
                    mode: "error",
                    errorMessage: error,
                }
            );
        });

    }


    validateComment(id) {
        this.setState({mode: "loading"});
        axios.post("http://matteoomicini.drink-web.eu/api/validate_comment", {
            id: id
        })
            .then(() => {
                this.loadContent();
            }).catch((error) => {
            this.setState(
                {
                    mode: "error",
                    errorMessage: error,
                }
            );
        })
    }

    componentDidMount() {
        this.loadContent();
    }

    getContent() {

        switch (this.state.mode) {
            case "loading": {
                return (
                    <Spinner style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center"
                }} color='green'/>
                );
            }
            case "not_loading": {
                return (

                    <List
                        dataSource={this.ds.cloneWithRows(this.state.listViewData)}
                        renderRow={
                                (object) => {
                                    return(
                                            <Item numLikes={object.num_like} id={object.id} comment={object.comment} date={object.date}
                                        sender={object.sender} select={()=>{this.selectItem(object.id)}}/>
                                    );
                                }
                            }
                        renderRightHiddenRow={
                                (data, secId, rowId, rowMap) =>
                                <Button
                                    full
                                    danger
                                    onPress={()=>{}}
                                    style={{
                                        flex: 1,
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}
                                >
                                <Icon active name="md-trash" />
                                </Button>
                            }
                        rightOpenValue={-75}

                    />
                );
            }

            case "error": {
                return (
                    <View style={{
                                alignSelf: 'center',
                                color: '#ecf0f1',
                                fontSize:25
                            }}>
                        <Text>
                            {this.state.errorMessage}
                        </Text>
                        <Button onPress={() => {this.loadContent()}}>
                            <Icon active name={"md-refresh"}/>
                        </Button>
                    </View>
                );
            }
            case "no_comments" : {
                return (
                    <View style={{
                                flex: 1,
                                backgroundColor: '#34495e',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                        <Text style={{
                                    alignSelf: 'center',
                                    color:"#1abc9c",
                                }}>
                            {this.state.errorMessage}
                        </Text>
                    </View>
                );
            }
            default: {
                return (<Text>default</Text>);
            }
        }
    }

    delete() {

    }

    getHeader() {

        return (
            <Header style={{
                    backgroundColor: "#1abc9c"
                }}>
                <Left>
                    <Button
                        transparent
                        onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                        <Icon name="menu"/>
                    </Button>
                </Left>
                <Body style={{ flex: 3 }}>
                <Title>Moderated comments</Title>
                </Body>
                <Right />
            </Header>
        );
    }


    render() {
        return (
            <Container style={{
                 backgroundColor: "#34495e"
            }}>
                <StatusBar
                    backgroundColor={"#1abc9c"}
                    barStyle="light-content"
                />

                {this.getHeader()}

                <Content>
                    {this.getContent()}
                </Content>
            </Container>
        );
    }
}

var styles = StyleSheet.create({
    listView: {
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default ListComment;