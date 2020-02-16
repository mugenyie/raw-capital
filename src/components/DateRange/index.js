import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import  moment  from  "moment";
import DateRangePicker from "react-native-daterange-picker";

import MainStyles from '../../common/MainStyles';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
 
export default class DateRange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      endDate: moment().add(-3, 'days'),
      displayedDate: moment()
    };
  }
 
  setDates = dates => {
    this.setState({
      ...dates
    });
  };
 
  render() {
    const { startDate, endDate, displayedDate } = this.state;
    return (
        <DateRangePicker
          onChange={this.setDates}
          endDate={endDate}
          startDate={startDate}
          displayedDate={displayedDate}
          range
        >
            

        <View style={{
          marginTop:40,
          flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            
          <View style={{flexDirection:'row'}}>
            <Text style={[MainStyles.HeadingOne,{marginRight:20,fontSize:15}]}>From: 
              <Text style={[MainStyles.HeadingOneLight,{fontSize:15}]}>  {startDate == null ? "null":startDate.format('YYYY-MM-DD')} {"\n"}</Text>
            </Text>
            <Text style={[MainStyles.HeadingOne,{fontSize:15}]}>To: 
              <Text style={[MainStyles.HeadingOneLight,{fontSize:15}]}>  {endDate == null ? "null": endDate.format('YYYY-MM-DD')}</Text>
            </Text>
          </View>
          <View 
            style={{
              flexDirection:'row',
              justifyContent:'space-around',
              width:230,
              borderWidth:1,borderColor:'#ccc',
              borderRadius:4,padding:8}}
            >
              <Icon name="ios-options" size={18}/>
              <Text 
              style={[MainStyles.HeadingOne,{fontSize:15,textAlign:'center'}]}
              >
                Select Date Range
              </Text>
            </View>
          </View>
        </DateRangePicker>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex:1,
    marginBottom:40,
    backgroundColor: "#fff",
    alignItems: "center",
  }
});