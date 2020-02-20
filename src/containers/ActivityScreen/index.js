import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import {Container, Content, Card, ListItem,Button, Thumbnail,Separator, Text, Right, Left, Body, List, Title, Icon} from 'native-base';
import SimpleHeader from '../../components/SimpleHeader';
import MainStyles from '../../common/MainStyles';
import ActivityListItem from '../../components/ActivityListItem';

class ActivityScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container>
          <SimpleHeader {...this.props} HeaderTitle="Activity"/>
          <Content>
            <View style={{flex:1}}>
                <Separator bordered>
                    <Text>Febraury 18, 2020</Text>
                </Separator>
                <ActivityListItem borrowed name="Emmanuel" amount={10000}/>
                <ActivityListItem name="Emmanuel" amount={10000}/>
                <ActivityListItem borrowed name="Emmanuel" amount={10000}/>
                <ActivityListItem borrowed name="Emmanuel" amount={10000}/>
                <Separator bordered>
                    <Text>Febraury 17, 2020</Text>
                </Separator>
                <ActivityListItem name="Emmanuel" amount={10000}/>
                <ActivityListItem borrowed name="Emmanuel" amount={10000}/>
                <Separator bordered>
                    <Text>Febraury 16, 2020</Text>
                </Separator>
                <ActivityListItem name="Emmanuel" amount={10000}/>
                <Button style={{alignSelf:'center',marginTop:20,marginBottom:100}} transparent>
                    <Text>View More</Text>
                </Button>
            </View>
          </Content>
      </Container>
    );
  }
}

export default ActivityScreen;
