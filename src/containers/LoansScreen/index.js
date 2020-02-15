//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, ScrollView, Button } from 'react-native';
import MainStyles from '../../common/MainStyles';
import Color from '../../common/Color';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;


// create a component
class LoansScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>LoansScreen</Text>
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
        backgroundColor: '#FFFFFF',
    },
    topContainer: {
        height: 250,
        backgroundColor: Color.PrimaryDark,
        width:ScreenWidth,
        borderBottomLeftRadius: 20,
        borderBottomEndRadius: 20,
        paddingTop:32
    }
});

//make this component available to the app
export default LoansScreen;
