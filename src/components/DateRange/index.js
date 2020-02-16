import React from "react";
import { StyleSheet, View, Text } from "react-native";
import  moment  from  "moment";
import DateRangePicker from "react-native-daterange-picker";

import MainStyles from '../../common/MainStyles';
 
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
      <View style={styles.container}>
        
        <DateRangePicker
          onChange={this.setDates}
          endDate={endDate}
          startDate={startDate}
          displayedDate={displayedDate}
          range
        >
          <Text 
          style={[MainStyles.HeadingOne,{borderWidth:1,borderColor:'#ccc',borderRadius:4,padding:10}]}
          >
            Select Date Range</Text>
        </DateRangePicker>
          <View style={{flexDirection:'row',paddingTop:20}}>
          <Text style={[MainStyles.HeadingOne,{marginRight:20}]}>From: 
            <Text style={MainStyles.HeadingOneLight}>  {startDate == null ? "null":startDate.format('YYYY-MM-DD')} {"\n"}</Text>
          </Text>
          <Text style={MainStyles.HeadingOne}>To: 
            <Text style={MainStyles.HeadingOneLight}>  {endDate == null ? "null": endDate.format('YYYY-MM-DD')}</Text>
          </Text>
          </View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  }
});