//import liraries
import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Container, Header, Content, Button, ListItem, Text, Icon, Left, Body, Right, Switch, Input } from 'native-base';
import MainStyles from '../../common/MainStyles';
import Color from '../../common/Color';

// create a component
class CustomerSettingsScreen extends Component {
    state = {
        limit:'1,000'
    }
    render() {
        return (
            <Container style={{paddingTop:40}}>
                <Content>
                <ListItem icon>
                    <Left>
                    <Icon active name="ios-person" />
                    </Left>
                    <Body>
                    <Text style={MainStyles.HeadingOne}>Is Active</Text>
                    </Body>
                    <Right>
                    <Switch thumbColor={Color.PrimaryDark} trackColor={{false:"green",true:"#ccc"}} value={true} />
                    </Right>
                </ListItem>

                <ListItem icon>
                    <Left>
                    <Icon active name="ios-cash" />
                    </Left>
                    <Body>
                    <Text style={MainStyles.HeadingOne}>Loan Limit</Text>
                    </Body>
                    <Right>
                    <TextInput
                    style={[MainStyles.HeadingOne,{borderBottomColor:'#000',borderBottomWidth:1, paddingBottom:0,marginBottom:-10,width:100}]}
                    onChangeText={limit => this.setState({limit})}
                    value={this.state.limit}
                    underlineColorAndroid="transparent"
                    />
                    </Right>
                </ListItem>
                <Button 
                    onPress={() => alert("Saved")}
                    style={{marginLeft:20,marginRight:20,marginTop:80,backgroundColor:Color.PrimaryDark,justifyContent:'center',alignContent:'center',borderRadius:4,elevation:4}}>
                        <Text style={[MainStyles.HeadingOne,{color:'#fff'}]}>SAVE SETTINGS</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

//make this component available to the app
export default CustomerSettingsScreen;
