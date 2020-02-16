//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, ScrollView, Icon, Platform} from 'react-native';
import {Container, Content, Button} from 'native-base';
import SimpleHeader from '../../components/SimpleHeader';
import LoansTable from '../../components/LoansTable';
import DateRange from '../../components/DateRange';

import MainStyles from '../../common/MainStyles';
import Color from '../../common/Color';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;


// create a component
class LoansScreen extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <SimpleHeader {...this.props} HeaderTitle="Loans Issued"/>
                <DateRange />
                <Button
                style={[MainStyles.ButtonStyle,{width:ScreenWidth*0.9,alignSelf:"center",elevation:0,height:34}]}
                >
                    <Text style={[MainStyles.HeadingOne,{color:'#fff',fontSize:18}]}>Load data</Text>
                </Button>
                <View style={{paddingTop:20}}/>
                <LoansTable />
            </Container>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    }
});

//make this component available to the app
export default LoansScreen;
