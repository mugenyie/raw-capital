//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import Color from '../../common/Color';
import CommonStyles from '../../common/styles';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'LOAN BOOK',
      subtitle: "UGX \n11,000,000",
      color: "#FF6E5B"
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'LENT OUT',
      subtitle: "UGX \n20,000,000",
      color: "#4E7052"
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'PAID BACK',
      subtitle: "UGX \n19,000,000",
      color: "#00BFFF"
    },
  ];
  
function Item({ title, subtitle, color }) {
    return (
        <View style={[styles.item,{backgroundColor:color}]}>
          <Text style={[styles.title,CommonStyles.HeadingOneLight,{fontSize:18}]}>{title}</Text>
          <View style={{marginTop:10}}/>
          <Text style={[styles.subtitle,CommonStyles.HeadingOne,{fontSize:30}]}>{subtitle}</Text>
        </View>
    );
}

// create a component
class SummarySlider extends Component {
    render() {
    return (
        <SafeAreaView style={this.props.style}>
            <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={DATA}
            renderItem={({ item }) => <Item title={item.title} subtitle={item.subtitle} color={item.color}/>}
            keyExtractor={item => item.id}
            />
        </SafeAreaView>
      );
    }
}

// define your styles
const styles = StyleSheet.create({
      item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        height: 150,
        width: 240,
        borderRadius: 18
      },
      title: {
        fontSize: 20,
        color:'#FFFFFF'
      },
      subtitle: {
        fontSize: 30,
        color:'#FFFFFF'
      }
});

//make this component available to the app
export default SummarySlider;
