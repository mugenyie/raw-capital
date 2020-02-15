//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import CardInfo from '../../components/CardInfo';
import {Icon, Header, Right, Left, Body, Title} from 'native-base';

import Color from '../../common/Color';
import MainStyles from '../../common/MainStyles';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

// create a component
class DashboardScreen extends Component {
    _renderLeftHeaderCompent = () => {
        return(
            <Icon name="ios-menu" size={24} color={Color.PrimaryDark}/>
        )
    }

    _renderRightHeaderCompent = () => {
        return(
            <Icon name="md-more" size={20} color={Color.PrimaryDark}/>
        )
    }


    render() {

        return (
            <View style={styles.container}>
                <Header style={{backgroundColor:'#fff',borderBottomWidth:0.5,borderBottomColor:'#ccc'}}>
                    <Left>
                        {this._renderLeftHeaderCompent()}
                    </Left>
                    <Body>
                        <Title style={[MainStyles.HeadingOne, {color:'#000'}]}>
                        Raw Capital
                        </Title>
                    </Body>
                    <Right>
                        {this._renderRightHeaderCompent()}
                    </Right>
                </Header>
                <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                    

                    <View style={{flex:1, marginTop:14, marginBottom: 20}}>
                        <CardInfo title="LOAN BOOK" subTitle="Total amount of money currently lent out" number="UGX 90,000" />
                        <CardInfo title="PROFIT / LOSS" subTitle="" number="UGX -1,000"/>
                        <CardInfo title="CUSTOMERS" subTitle="" number="200"/>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#f8f8f8',
    }
});

//make this component available to the app
export default DashboardScreen;
