//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import {Header, Left, Right, Body, Icon, Title, Item, Input, Button} from 'native-base';

import Color from '../../common/Color';

// create a component
class HeaderSearchBar extends Component {
    render() {
        return (
            <Header searchBar rounded style={{backgroundColor:Color.PrimaryDark}}>
                <Item>
                    <Icon name="ios-search" />
                    <Input placeholder="Search customer name..." />
                    <Icon name="ios-people" />
                </Item>
                <Button transparent>
                    <Text>Search</Text>
                </Button>
            </Header>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

//make this component available to the app
export default HeaderSearchBar;
