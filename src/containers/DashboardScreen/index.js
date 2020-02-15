//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import {Header, Card} from 'react-native-elements';
import CardInfo from '../../components/CardInfo';

import Color from '../../common/Color';
import CommonStyles from '../../common/styles';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

// create a component
class DashboardScreen extends Component {
    _renderLeftHeaderCompent = () => {
        return(
            <Icon name="md-menu" size={24} color={Color.PrimaryDark}/>
        )
    }

    _renderRightHeaderCompent = () => {
        return(
            <Icon2 name="ellipsis-v" size={20} color={Color.PrimaryDark}/>
        )
    }


    render() {

        return (
            <View style={styles.container}>
                <Header
                containerStyle={{
                    marginTop:-30,
                    backgroundColor: '#fff',
                    elevation:1
                }}
                leftComponent={this._renderLeftHeaderCompent()}
                centerComponent={{ text: 'Raw Capital', style: [CommonStyles.HeadingOne, { color: Color.PrimaryDark, fontSize:20 }] }}
                rightComponent={this._renderRightHeaderCompent()}
                />
                <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                    

                    <View style={{flex:1, marginTop:14, marginBottom: 20}}>
                        <CardInfo title="LOAN BOOK" subTitle="Total amount of money currently lent out" number={1000} />
                        <CardInfo title="PROFIT / LOSS" subTitle="" number={-900}/>
                        <CardInfo title="CUSTOMERS" subTitle="" number={200}/>
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
