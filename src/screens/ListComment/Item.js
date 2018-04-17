import React, {Component} from 'react';
import {View, StyleSheet, StatusBar, TouchableHighlight} from 'react-native';
import {ListItem, Text, Right, Left, Label, Title, Body} from 'native-base';

export default class Item extends Component {

    constructor(props = {selected: false}) {
        super(props);
        this.state = {
            id: props.id,
            numLikes: props.numLikes,
            comment: props.comment,
            date: props.date,
            sender: props.sender,
            selected: props.selected
        };
    }

    render() {
        if (this.state.selected) {
            return (
                <View style={styles.boxSelected}>
                    <ListItem style={styles.itemSelected} onLongPress={()=>{this.props.select()}}>
                        <Left>
                            <Text style={styles.text}> {this.state.id} </Text>
                        </Left>
                        <Body>
                        <Text style={styles.text}> {this.state.sender} </Text>
                        <Text style={styles.text}> {this.state.comment} </Text>
                        </Body>
                        <Right>
                            <Text style={styles.text}>likes: {this.state.numLikes}</Text>
                            <Text note style={styles.text}> {this.state.date} </Text>
                        </Right>
                    </ListItem>
                </View>
            );
        }
        else {
            return (
                <View style={styles.box}>
                    <ListItem style={styles.item} onLongPress={()=>{this.props.select()}}>
                        <Left>
                            <Text style={styles.text}> {this.state.id} </Text>
                        </Left>
                        <Body>
                        <Text style={styles.text}> {this.state.sender} </Text>
                        <Text style={styles.text}> {this.state.comment} </Text>
                        </Body>
                        <Right>
                            <Text style={styles.text}>likes: {this.state.numLikes}</Text>
                            <Text note style={styles.text}> {this.state.date} </Text>
                        </Right>
                    </ListItem>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    box: {
        padding: 5,
        backgroundColor: '#34495e',
    },
    center: {
        alignSelf: 'center'
    },
    text: {
        color: '#ecf0f1',
        alignSelf: 'center'
    },
    item: {
        padding: 35,
        alignSelf: 'center',
        backgroundColor: '#1abc9c'
    },
    boxSelected: {
        padding: 5,
        backgroundColor: '#3498db',
    },
    itemSelected: {
        padding: 35,
        alignSelf: 'center',
        backgroundColor: '#9b59b6'
    }
});