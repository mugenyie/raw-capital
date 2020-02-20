import React, { Component } from 'react';
import { View, Text, StyleSheet, Image,Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import MainStyles from '../../common/MainStyles';
import { ListItem, Body, Icon, Container, Content } from 'native-base';import SimpleHeader from '../../components/SimpleHeader';

class InvestorProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container>
          <SimpleHeader {...this.props} HeaderTitle="My Account"/>
          <Content style={{paddingTop:20}}>
          
            <ListItem>
                <View style={{paddingRight:20}}>
                <Icon name="lock"/>
                </View>
                <TouchableOpacity>
                <Text style={MainStyles.HeadingOne}>Security</Text>
                </TouchableOpacity>
            </ListItem>

            <ListItem>
                <View style={{paddingRight:20}}>
                <Icon name="card"/>
                </View>
                <TouchableOpacity>
                <Text style={MainStyles.HeadingOne}>Add Card</Text>
                </TouchableOpacity>
            </ListItem>

            <ListItem>
                <View style={{paddingRight:20}}>
                <Icon name="log-out"/>
                </View>
                <TouchableOpacity>
                <Text style={MainStyles.HeadingOne}>Sign out</Text>
                </TouchableOpacity>
            </ListItem>
            
          </Content>
      </Container>
    );
  }
}

export default InvestorProfileScreen;
