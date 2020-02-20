import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Button, TouchableOpacity } from 'react-native';
import {Container, Content, Card, ListItem, Thumbnail,Separator, Text, Right, Left, Body, List, Title, Icon} from 'native-base';
import MainStyles from '../../common/MainStyles';

export default class ActivityListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      const {borrowed,name,amount} = this.props;
    return (
        <ListItem>
            <View style={{paddingRight:20}}>
                <Icon name={borrowed?"card":"cash"}/>
            </View>
            <Text>
              <Text style={[MainStyles.HeadingOneLight,{fontSize:14}]}>{name} {borrowed?" borrowed":" Paid back"}</Text>
              <Text style={[MainStyles.HeadingOneLight,{color:'blue',fontSize:14}]}> {amount}</Text>
            </Text>
        </ListItem>
    );
  }
}
