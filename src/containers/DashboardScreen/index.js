//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import CardInfo from '../../components/CardInfo';
import {Icon, Header, Right, Left, Body, Title, Drawer} from 'native-base';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import SideBar from './SideBar';
import Color from '../../common/Color';
import MainStyles from '../../common/MainStyles';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

// create a component
class DashboardScreen extends Component {
    closeDrawer  = () => {
        this.drawer._root.close()
    };
    openDrawer = () => { 
        this.drawer._root.open() 
    };

    _renderLeftHeaderCompent = () => {
        return(
            <TouchableOpacity
            onPress={() => this.openDrawer()}
            >
                <Icon name="menu" size={24} color={Color.PrimaryDark}/>
            </TouchableOpacity>
        )
    }

    _renderRightHeaderCompent = () => {
        return(
            <TouchableOpacity
            onPress={() => alert("Are you sure you want to logOut ?")}
            >
                <Icon name="power" size={20} color={Color.PrimaryDark}/>
            </TouchableOpacity>
        )
    }


    render() {

        return (
            <Drawer 
            ref={(ref) => { this.drawer = ref; }} 
            content={<SideBar navigator={this.navigator} />} 
            onClose={() => this.closeDrawer()} >
                <GestureRecognizer 
                onSwipeRight={() => this.openDrawer()}
                style={styles.container}>
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
                            <CardInfo onPress={() => this.props.navigation.navigate("Loans")} title="LOAN BOOK" subTitle="Total amount of money currently lent out" number="UGX 90,000" />
                            <CardInfo onPress={() => this.props.navigation.navigate("Paybacks")} title="PROFIT / LOSS" subTitle="" number="UGX -1,000"/>
                            <CardInfo onPress={() => this.props.navigation.navigate("Customers")} title="CUSTOMERS" subTitle="" number="200"/>
                        </View>
                    </ScrollView>
                </GestureRecognizer>
            </Drawer>
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
