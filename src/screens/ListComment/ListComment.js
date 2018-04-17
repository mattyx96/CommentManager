import Item from './Item';


import React, {Component} from "react";
import axios from 'axios'
import {ListView, View, StatusBar, TouchableHighlight} from "react-native";
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
            selectedId: [],
        };
    }

    loadContent() {
        this.setState({mode: "loading"});
        axios.get("http://matteoomicini.drink-web.eu/api/get_all_unmoderated_comments")
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

    selectItem(id) {

        // if(this.state.mode !== "selection"){
        //     this.setState({
        //         mode: "selection"
        //     });
        // }
        if(!this.containsObject(id, this.state.selectedId)) {

            const newSelectedId = this.state.selectedId;
            newSelectedId.push(id);
            this.setState({
                selectedId: newSelectedId
            });
            console.log("CASE L ID NON è PRESENTE id:"+id+" state: " + JSON.stringify(this.state));
        }
        if(this.containsObject(id, this.state.selectedId)){

            const newSelectedId = this.state.selectedId;
            newSelectedId.splice(this.state.selectedId.indexOf(id), 1)
            console.log("newSelectedId" + newSelectedId);

            // this.setState({
            //     selectedId: newSelectedId
            // });
            console.log("CASE L ID è PRESENTE id:"+id+" state: " + JSON.stringify(this.state));
        }
    }

    containsObject(obj, list) {
        let i;
        for (i = 0; i < list.length; i++) {
            if (list[i] === obj) {
                return true;
            }
        }

        return false;
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
                        renderLeftHiddenRow={
                                (data) =>{
                                    return(
                                        <Button
                                            full
                                            onPress={() => this.validateComment(data.id)}
                                            style={{
                                              backgroundColor: "#2ecc71",
                                              flex: 1,
                                              alignItems: "center",
                                              justifyContent: "center"
                                            }}
                                        >
                                        <Icon active name="md-checkmark" />
                                        </Button>
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
                            <Text>right</Text>
                            </Button>
                            }
                        leftOpenValue={75}
                        rightOpenValue={-75}
                    />
                );
            }

            case "selection": {
                console.log("CASE SELECTION state: " + JSON.stringify(this.state));

                return (

                    <List
                        dataSource={this.ds.cloneWithRows(this.state.listViewData)}
                        renderRow={
                                (object) => {
                                    let selection = false;
                                    if(this.containsObject(object.id, this.state.selectedId)){
                                        selection = true;
                                    }
                                    console.log("render row selection: " + selection);
                                    return(
                                            <Item numLikes={object.num_like} id={object.id} comment={object.comment} date={object.date}
                                        sender={object.sender} selection={selection} select={()=>{this.selectItem(object.id)}} />
                                    );

                                }
                            }
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

    delete(){

    }

    getHeader(){
        if(this.state.mode === "selection"){
            return(
                <Header style={{
                    backgroundColor: "#9b59b6"
                }}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Text>left</Text>
                        </Button>
                    </Left>
                    <Body style={{ flex: 3 }}>
                    <Title>Unmoderated comments</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.delete()}>
                            <Icon name={"md-trash"}/>
                        </Button>
                    </Right>
                </Header>
            );
        } else {
            return(
                <Header style={{
                    backgroundColor: "#1abc9c"
                }}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Text>left</Text>
                        </Button>
                    </Left>
                    <Body style={{ flex: 3 }}>
                    <Title>Unmoderated comments</Title>
                    </Body>
                    <Right />
                </Header>
            );
        }
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

export default ListComment;