//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, ScrollView, Icon} from 'react-native';
import {Container, Content, Button} from 'native-base';
import SimpleHeader from '../../components/SimpleHeader';
import PaybacksTable from '../../components/PaybacksTable';
import DateRange from '../../components/DateRange';

import MainStyles from '../../common/MainStyles';
import Color from '../../common/Color';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;


// create a component
class PaymentsScreen extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <SimpleHeader {...this.props} HeaderTitle="Paybacks"/>
                <Content style={styles.content}>
                    <View style={{alignItems:'center'}}> 
                        <DateRange />
                        <Button
                        style={[MainStyles.ButtonStyle,{width:ScreenWidth*0.9,marginBottom:20}]}
                        >
                            <Text style={[MainStyles.HeadingOne,{color:'#fff'}]}>Load data</Text>
                        </Button>
                    </View>
                    <PaybacksTable />
                </Content>
            </Container>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    content: {
        flex:1,
        paddingTop:40
    }
});

//make this component available to the app
export default PaymentsScreen;
