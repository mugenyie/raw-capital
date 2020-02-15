//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import {Card} from 'react-native-elements';
import CommonStyle from '../../common/styles';
import Icon from 'react-native-vector-icons/AntDesign';
import Color from '../../common/Color';


const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

// create a component
class CardInfo extends Component {
    render() {
        const {title, subTitle, number} = this.props;
        return (
            <Card containerStyle={styles.container}>
                <View style={{flex:1, flexDirection:'row'}}>
                    <View style={{flex:0.8}}>
                        <Text style={[CommonStyle.HeadingOneLight, styles.cardTitle]}>{title}</Text>
                        <Text style={[CommonStyle.HeadingOne, styles.cardNumber]}>${number}</Text>
                        <Text style={[CommonStyle.HeadingOneLight, styles.cardSubTitle]}>{subTitle}</Text>
                    </View>
                    <View style={{flex:0.1, borderLeftColor:'#ccc', borderLeftWidth: 0.5,height:120}} />
                    <View style={{flex:0.1}}>
                        <TouchableOpacity>
                            <Icon style={{marginTop:40}} name="right" size={25} color="#888"/>
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
        elevation:2,
        height:180,
        marginLeft:15,
        marginRight:15,
        borderRadius:8,
        backgroundColor: '#fff',
        borderWidth:1,
        borderColor:'#f8f8f8',
        paddingTop:30
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
