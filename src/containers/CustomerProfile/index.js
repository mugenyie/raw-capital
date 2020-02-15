//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import {Container, Content, Card, Button} from 'native-base';
import LoansTable from '../../components/LoansTable'
import Icon from 'react-native-vector-icons/Ionicons';
import MainStyles from '../../common/MainStyles';
import Color from '../../common/Color';

const ScreenWidth = Dimensions.get('window').width;
const ImageWidth = 0.4;
// create a component
class CustomerScreen extends Component {
    render() {
        return (
            <Container>
                <Content contentContainerStyle={styles.container}>
                    <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                        <Image 
                        style={{paddingRight:20}}
                        source={{uri:"https://intelworldsstoragev2.blob.core.windows.net/loanme/256701410015_Dennis.jpg"}}
                        style={[MainStyles.Card, {width: ScreenWidth*ImageWidth, height: ScreenWidth*ImageWidth, borderRadius: ScreenWidth*ImageWidth/2}]}
                        />
                        <View style={{marginTop:ScreenWidth*0.07}}>
                            <Text style={[MainStyles.HeadingOne,styles.text]}>Asiimwe Dennis</Text>

                            <Text style={[MainStyles.HeadingOneLight,styles.text]}>+256787744279</Text>

                            <Text style={[MainStyles.HeadingOneLight,styles.text]}>ecmugenyi@gmail.com</Text>

                        </View>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                        <Button transparent style={{backgroundColor:'#fff', flex:0.48, marginTop:20,alignContent:'center',justifyContent:'center',height:32,borderRadius:4, borderWidth:1,borderColor:'#ccc'}}>
                            <Text style={MainStyles.HeadingOne,{fontSize:13}}>SETTINGS</Text>
                            <Icon name="ios-settings" size={20} style={{padding:10}}/>
                        </Button>
                        <Button transparent style={{backgroundColor:'#fff', flex:0.48, marginTop:20,alignContent:'center',justifyContent:'center',height:32,borderRadius:4, borderWidth:1,borderColor:'#ccc'}}>
                            <Text style={MainStyles.HeadingOne,{fontSize:13}}>ISSUE LOAN</Text>
                            <Icon name="md-share-alt" size={20} style={{padding:10}}/>
                        </Button>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:40}}>
                        <TouchableOpacity>
                            <Icon style={{position:'absolute', left:-25}} name="ios-redo" size={18}/>
                            <Text style={[MainStyles.HeadingOne,{fontSize:13}]}>LOANS ISSUED</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon style={{position:'absolute', left:-25}} name="ios-undo" color="#999" size={18}/>
                            <Text style={[MainStyles.HeadingOne,{fontSize:13,color:'#999'}]}>PAYBACKS</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{borderBottomWidth:0.5,borderBottomColor:'#ccc',paddingTop:4,marginBottom:5}}/>
                    <LoansTable />
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
        marginTop:20,
        paddingRight:10,
        paddingLeft:10
    },
    textLabel: {
        fontSize:13
    },
    text:{
        fontSize:15,
        flexWrap:'wrap',
        padding:4
    },
    textBlock: {
        padding:8
    }
});

//make this component available to the app
export default CustomerScreen;
