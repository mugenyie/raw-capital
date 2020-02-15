//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import {Container, Content, Card} from 'native-base';
import HeaderSearchBar from '../../components/HeaderSearchBar';
import CustomerTable from '../../components/CustomerTable';

const ScreenWidth = Dimensions.get('window').width;
// create a component
const data = [
    {},
    {}
];

class CustomerScreen extends Component {

    render() {
        return (
            <Container>
                <HeaderSearchBar />
                <Content contentContainerStyle={{marginTop:40}}>
                    <View style={{width:ScreenWidth*0.96, marginLeft:ScreenWidth*0.02}}>
                        <CustomerTable data={data} />
                    </View>
                </Content>
            </Container>
        );
    }
}

//make this component available to the app
export default CustomerScreen;
