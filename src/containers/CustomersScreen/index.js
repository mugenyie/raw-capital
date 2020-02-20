//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Button, TouchableOpacity } from 'react-native';
import {Container, Content, Card, ListItem, Thumbnail, Text, Right, Left, Body, List} from 'native-base';
import HeaderSearchBar from '../../components/HeaderSearchBar';
import MainStyles from '../../common/MainStyles';
import CustomerListItem from '../../components/CustomerListItem';
import { DataTable } from 'react-native-paper';

const ScreenWidth = Dimensions.get('window').width;

class CustomerScreen extends Component {

    render() {
        return (
            <Container>
                <HeaderSearchBar />
                <Content contentContainerStyle={{paddingTop:40,paddingBottom:100}}>
                <List>
                    <CustomerListItem onPress={() => this.props.navigation.navigate("Profile")} defaulter name="Emmanuel Columbus" profileImage="https://intelworldsstoragev2.blob.core.windows.net/loanme/256701410015_Dennis.jpg"/>
                    <CustomerListItem onPress={() => this.props.navigation.navigate("Profile")} name="Emmanuel Mugenyi" profileImage="https://intelworldsstoragev2.blob.core.windows.net/loanme/256701410015_Dennis.jpg"/>
                    <CustomerListItem onPress={() => this.props.navigation.navigate("Profile")} name="Emmanuel Mugenyi" profileImage="https://intelworldsstoragev2.blob.core.windows.net/loanme/256701410015_Dennis.jpg"/>
                    <CustomerListItem onPress={() => this.props.navigation.navigate("Profile")} name="Emmanuel Mugenyi" profileImage="https://intelworldsstoragev2.blob.core.windows.net/loanme/256701410015_Dennis.jpg"/>
                    <CustomerListItem onPress={() => this.props.navigation.navigate("Profile")} name="Emmanuel Mugenyi" profileImage="https://intelworldsstoragev2.blob.core.windows.net/loanme/256701410015_Dennis.jpg"/>
                </List>
                <DataTable.Pagination
                style={{marginTop:40}}
                page={1}
                numberOfPages={3}
                onPageChange={(page) => { console.log(page); }}
                label="1-2 of 6"
                />
                </Content>
            </Container>
        );
    }
}

//make this component available to the app
export default CustomerScreen;
