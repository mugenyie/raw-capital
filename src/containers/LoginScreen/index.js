//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TextInput } from 'react-native';
import {Icon, Button} from 'native-base';
import Images from '../../common/Images';
import MainStyles from '../../common/MainStyles';
import Color from '../../common/Color';

const ScreenWidth = Dimensions.get('window').width;

// create a component
class LoginScreen extends Component {
    state ={
        username: "Username",
        password: ""
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{marginBottom:100}}>
                    <Image 
                    style={{width:100}}
                    resizeMode='contain'
                    source={Images.LogoWhite}
                    />
                    <Text style={[MainStyles.HeadingOne,{color:Color.PrimaryDark}]}>Raw Capital</Text>
                </View>

                <View>
                    <Icon style={styles.iconStyle} color={Color.PrimaryDark} name="person" size={25}/>
                    <TextInput
                    style={[styles.Input,MainStyles.HeadingOne,{fontSize:15}]}
                    onChangeText={username => this.setState({username})}
                    value={this.state.username}
                    underlineColorAndroid="transparent"
                    />
                </View>

                <View style={{marginTop:10}}>
                    <Icon style={styles.iconStyle} color={Color.PrimaryDark} name="lock" size={25}/>
                    <TextInput
                    autoCorrect={false}
                    secureTextEntry
                    style={[styles.Input,MainStyles.HeadingOne,{fontSize:24}]}
                    onChangeText={username => this.setState({username})}
                    value={this.state.username}
                    underlineColorAndroid="transparent"
                    />
                </View>

                <Button
                style={[MainStyles.ButtonStyle,{width:ScreenWidth*0.7,marginTop:80}]}
                onPress={() => this.props.navigation.navigate("HomeScreen")}>
                    <Text style={[MainStyles.HeadingOne,{fontSize:18,color:'#fff'}]}>LOGIN</Text>
                </Button>

            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
    },
    Input: {
        height: 50, 
        width:ScreenWidth*0.9, 
        elevation: 1,
        borderColor:'#ccc',
        borderWidth: 0.5, 
        borderRadius:8,
        marginTop:8,
        paddingLeft: 50
    },
    buttonStyle: {
        width:ScreenWidth*0.5, 
        borderRadius:8,
        height:50,
        marginTop: 60,
        backgroundColor:Color.PrimaryDark
    },
    iconStyle: {
        position: 'absolute',
        top: 16,
        left: 20
    }
});

//make this component available to the app
export default LoginScreen;
