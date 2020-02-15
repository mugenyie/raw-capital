//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Color from '../../common/Color';
import Images from '../../common/Images';

const SPLASH_SECONDS = 3000;

// create a component
class SplashScreen extends Component {

    async componentDidMount() {
        setTimeout(async () => {
            this.props.navigation.navigate("Login")
        }, SPLASH_SECONDS);
    }


    render() {
        return (
            <View style={styles.container}>
                <Image 
                style={{width:80}}
                resizeMode='contain'
                source={Images.Logo}
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
        backgroundColor: Color.PrimaryDark
    },
});

//make this component available to the app
export default SplashScreen;
