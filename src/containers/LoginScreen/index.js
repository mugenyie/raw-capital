//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Dimensions } from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import Images from '../../common/Images';
import CommonStyles from '../../common/styles';
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
                    <Text style={[CommonStyles.HeadingOne,{color:Color.PrimaryDark}]}>Raw Capital</Text>
                </View>

                <View>
                    <Icon style={styles.iconStyle} color={Color.PrimaryDark} name="md-person" size={25}/>
                    <TextInput
                    style={[styles.Input,CommonStyles.HeadingOne,{fontSize:15}]}
                    onChangeText={username => this.setState({username})}
                    value={this.state.username}
                    underlineColorAndroid="transparent"
                    />
                </View>

                <View>
                    <Icon style={styles.iconStyle} color={Color.PrimaryDark} name="md-lock" size={25}/>
                    <TextInput
                    autoCorrect={false}
                    secureTextEntry
                    style={[styles.Input,CommonStyles.HeadingOne,{fontSize:15}]}
                    onChangeText={username => this.setState({username})}
                    value={this.state.username}
                    underlineColorAndroid="transparent"
                    />
                </View>

                <Button
                title="Login"
                buttonStyle={styles.buttonStyle}
                onPress={() => this.props.navigation.navigate("HomeScreen")}
                />

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
        height: 40, 
        width:ScreenWidth*0.8, 
        borderColor: Color.PrimaryDark, 
        borderWidth: 2, 
        borderRadius:8,
        marginTop:10,
        paddingLeft: 40
    },
    buttonStyle: {
        width:ScreenWidth*0.4, 
        borderRadius:8,
        height:40,
        marginTop: 100,
        backgroundColor:Color.PrimaryDark
    },
    iconStyle: {
        position: 'absolute',
        top: 16,
        left: 10
    }
});

//make this component available to the app
export default LoginScreen;
