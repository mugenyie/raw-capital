//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image,Dimensions, ImageBackground, TouchableOpacity } from 'react-native';

import MainStyles from '../../common/MainStyles';
import { ListItem, Body, Icon, Container, Content } from 'native-base';
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

// create a component
class SideBar extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <View style={{flex:0.4}}>
                    <ImageBackground
                    resizeMode='cover'
                    blurRadius={4}
                    style={{width:ScreenWidth*0.8,height:ScreenHeight*0.3}}
                    source={{uri:"https://ak1.picdn.net/shutterstock/videos/20723911/thumb/1.jpg"}}
                    >
                        <Text style={[MainStyles.HeadingOne,{color:'#fff',position:'absolute',bottom:10,elevation:10,padding:20}]}>Hi Allan</Text>
                    </ImageBackground>
                </View>
                <Content style={{flex:0.6, marginTop:80}}>
                    <ListItem>
                        <Icon name="person"/>
                        <Body>
                        <TouchableOpacity>
                        <Text style={[MainStyles.HeadingOne,{paddingLeft:10}]}>Profile</Text>
                        </TouchableOpacity>
                        </Body>
                    </ListItem>

                    <ListItem style={{marginTop:10}}>
                        <Icon name="settings"/>
                        <Body>
                            <TouchableOpacity>
                            <Text style={[MainStyles.HeadingOne,{paddingLeft:10}]}>Trust Network Settings</Text>
                            </TouchableOpacity>
                        </Body>
                    </ListItem>

                    <ListItem>
                        <Icon name="information-circle"/>
                        <Body>
                        <TouchableOpacity>
                            <Text style={[MainStyles.HeadingOne,{paddingLeft:10}]}>About</Text>
                        </TouchableOpacity>
                        </Body>
                    </ListItem>
                </Content>
            </Container>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

//make this component available to the app
export default SideBar;
