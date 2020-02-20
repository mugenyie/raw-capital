import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import MainStyles from '../../common/MainStyles';
import {Container, Content, Card, ListItem, Thumbnail, Text, Right, Left, Body, List} from 'native-base';

export default class CustomerListItem extends Component {
  render() {
      const {name, defaulter, profileImage, onPress} = this.props;
    return (
        <ListItem>
            <TouchableOpacity onPress={onPress} style={{flexDirection:'row',flex:1}}>
                <Left style={{flex:0.95}}>
                    <Thumbnail style={{marginRight:20}} source={{ uri: profileImage }} />
                    <Text style={[MainStyles.HeadingOneLight,{fontSize:14}]}>{name}</Text>
                </Left>
                <Right style={{flex:0.05}}>
                    <View style={{backgroundColor:defaulter?'red':'#49a342',width:14,height:14,borderRadius:7,elevation:2}} />
                </Right>
            </TouchableOpacity>
        </ListItem>
    );
  }
}
