//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput,Dimensions } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';
import Color from '../../common/Color';
import MainStyles from '../../common/MainStyles';
const ScreenWidth = Dimensions.get('window').width;

// create a component
class IssueLoanScreen extends Component {
    state = {
        amount:'1,000',
        tenure:'30',
        rate:'10'
    }
    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <View style={{flexDirection:'column',marginBottom:20}}>
                        <Text style={[MainStyles.HeadingOne,{fontSize:18,marginRight:10}]}>Amount To Issue (UGX) :</Text>
                        <TextInput
                        style={[MainStyles.HeadingOne,{fontSize:48,borderBottomWidth:1,borderBottomColor:'#aaa',paddingBottom:0,width:ScreenWidth*0.8}]}
                        onChangeText={amount => this.setState({amount})}
                        value={this.state.amount}
                        underlineColorAndroid="transparent"
                        />
                    </View>

                    <View style={{flexDirection:'row',marginBottom:20}}>
                        <Text style={[MainStyles.HeadingOne,{fontSize:15,top:18,marginRight:10}]}>Tenure (Loan validity in days) :</Text>
                        <TextInput
                        style={[MainStyles.HeadingOneLight,{fontSize:20,borderBottomWidth:1,borderBottomColor:'#aaa',paddingBottom:0,width:ScreenWidth*0.1}]}
                        onChangeText={tenure => this.setState({tenure})}
                        value={this.state.tenure}
                        underlineColorAndroid="transparent"
                        />
                    </View>

                    <View style={{flexDirection:'row',marginBottom:20}}>
                        <Text style={[MainStyles.HeadingOne,{fontSize:15,top:18,marginRight:10}]}>Monthly Rate (%) :</Text>
                        <TextInput
                        style={[MainStyles.HeadingOneLight,{fontSize:20,borderBottomWidth:1,borderBottomColor:'#aaa',paddingBottom:0,width:ScreenWidth*0.1}]}
                        onChangeText={rate => this.setState({rate})}
                        value={this.state.rate}
                        underlineColorAndroid="transparent"
                        />
                    </View>

                    <Button 
                    onPress={() => alert("Loan Issued")}
                    style={{backgroundColor:Color.PrimaryDark,justifyContent:'center',alignContent:'center',marginTop:20,borderRadius:4,elevation:4}}>
                        <Text style={[MainStyles.HeadingOne,{color:'#fff'}]}>ISSUE LOAN</Text>
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
        backgroundColor: '#fff',
        paddingTop:40,
        paddingLeft:10,
        paddingRight:10
    },
});

//make this component available to the app
export default IssueLoanScreen;
