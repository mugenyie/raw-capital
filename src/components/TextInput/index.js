//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Color from '../../common/Color';
import CommonStyles from '../../common/styles';

const ScreenWidth = Dimensions.get('window').width;

// create a component
class TextInput extends Component {
    state = {
        inputdata : this.props.inputdata
    }
    render() {
        return (
            <TextInput
            style={[styles.Input,CommonStyles.HeadingOne,{fontSize:15}]}
            onChangeText={inputdata => this.setState({inputdata})}
            value={this.state.inputdata}
            underlineColorAndroid="transparent"
            />
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    Input: {
        height: 40, 
        width:ScreenWidth*0.8, 
        borderColor: Color.PrimaryDark, 
        borderWidth: 2, 
        borderRadius:8,
        marginTop:10,
        paddingLeft: 40
    },
});

//make this component available to the app
export default TextInput;
