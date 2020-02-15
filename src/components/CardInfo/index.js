//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import {Container, Content, Card, Icon} from 'native-base';
import MainStyles from '../../common/MainStyles';
import Color from '../../common/Color';


const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

// create a component
class CardInfo extends Component {
    render() {
        const {title, subTitle, number} = this.props;
        return (
            <Card style={styles.container}>
                <View style={{flex:1, flexDirection:'row'}}>
                    <View style={{flex:0.8}}>
                        <Text style={[MainStyles.HeadingOneLight, styles.cardTitle]}>{title}</Text>
                        <Text style={[MainStyles.HeadingOne, styles.cardNumber]}>${number}</Text>
                        <Text style={[MainStyles.HeadingOneLight, styles.cardSubTitle]}>{subTitle}</Text>
                    </View>
                    <View style={{flex:0.1, borderLeftColor:'#ccc', borderLeftWidth: 0.5,height:140}} />
                    <View style={{flex:0.1}}>
                        <TouchableOpacity>
                            <Icon style={{marginTop:40}} name="ios-arrow-forward" size={25} color="#888"/>
                        </TouchableOpacity>
                    </View>
                </View>
            </Card>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex:1,
        height:180,
        marginLeft:15,
        marginRight:15,
        padding:20,
        borderRadius:8,
        marginBottom: 20
    },
    cardTitle: {
        textAlign:'left',
        color:'#444'
    },
    cardNumber:{
        paddingBottom:10,
        paddingTop:10,
        textAlign:'left',
        fontSize: 32,
        color:'#444'
    },
    cardSubTitle:{
        textAlign:'left',
        fontSize: 15,
        color:'#444'
    }
});

//make this component available to the app
export default CardInfo;
