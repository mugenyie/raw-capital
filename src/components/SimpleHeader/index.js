import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Icon, Header, Right, Left, Body, Title, Drawer} from 'native-base';
import MainStyles from '../../common/MainStyles';

export default class SimpleHeader extends Component {

  render() {
    const {HeaderTitle} = this.props;
    return (
        <Header style={{backgroundColor:'#fff',borderBottomWidth:0.5,borderBottomColor:'#ccc'}}>
            <Left>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Icon name="arrow-back"/>
              </TouchableOpacity>
            </Left>
            <Body>
                <Title style={[MainStyles.HeadingOne, {color:'#000'}]}>
                {HeaderTitle}
                </Title>
            </Body>
            <Right />
        </Header>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
},
})
