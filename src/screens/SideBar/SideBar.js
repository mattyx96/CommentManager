/**
 * Created by Mattyx on 27/04/18.
 */
import React from "react";
import { AppRegistry, Image, StatusBar, ImageBackground} from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";
const routes = ["ModeratedComments", "UnmoderatedComments"];


export default class SideBar extends React.Component {
    render() {
        return (
            <Container style={{backgroundColor: "#9b59b6"}}>
                <Content>
                    <ImageBackground
                        source={require('../../assets/images/background_flat_green_yellow.png')}
                        style={{
              height: 120,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}>
                        <Image
                            square
                            style={{ height: "60%", width: "50%" }}
                            source={require('../../assets/images/logopng.png')}
                        />
                    </ImageBackground>
                    <List
                        dataArray={routes}
                        renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}>
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
                    />
                </Content>
            </Container>
        );
    }
}

