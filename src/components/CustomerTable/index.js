import * as React from 'react';
import { DataTable } from 'react-native-paper';
import {ScrollView, Image, Dimensions} from 'react-native';
import MainStyles from '../../common/MainStyles';

export default class CustomerTable extends React.Component {
  render() {
    return (
      <DataTable>
        <DataTable.Header>
          <DataTable.Title style={{justifyContent:'center'}}>Date Joined</DataTable.Title>
          <DataTable.Title style={{justifyContent:'center'}}>Name</DataTable.Title>
          <DataTable.Title style={{justifyContent:'center'}} numeric>Phone</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row onPress={() => this.props.navigation.navigate("Profile")}>
          <DataTable.Cell style={{justifyContent:'center'}}>2019/02/12</DataTable.Cell>
          <DataTable.Cell style={{justifyContent:'center'}}>Asiimwe Dennis</DataTable.Cell>
          <DataTable.Cell style={{justifyContent:'center'}} numeric>256701410015</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row onPress={() => this.props.navigation.navigate("Profile")}>
          <DataTable.Cell style={{justifyContent:'center'}}>2019/02/12</DataTable.Cell>
          <DataTable.Cell style={{justifyContent:'center'}}>Asiimwe Dennis</DataTable.Cell>
          <DataTable.Cell style={{justifyContent:'center'}} numeric>256701410015</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row onPress={() => this.props.navigation.navigate("Profile")}>
          <DataTable.Cell style={{justifyContent:'center'}}>2019/02/12</DataTable.Cell>
          <DataTable.Cell style={{justifyContent:'center'}}>Asiimwe Dennis</DataTable.Cell>
          <DataTable.Cell style={{justifyContent:'center'}} numeric>256701410015</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row onPress={() => this.props.navigation.navigate("Profile")}>
          <DataTable.Cell style={{justifyContent:'center'}}>2019/02/12</DataTable.Cell>
          <DataTable.Cell style={{justifyContent:'center'}}>Asiimwe Dennis</DataTable.Cell>
          <DataTable.Cell style={{justifyContent:'center'}} numeric>256701410015</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row onPress={() => this.props.navigation.navigate("Profile")}>
          <DataTable.Cell style={{justifyContent:'center'}}>2019/02/12</DataTable.Cell>
          <DataTable.Cell style={{justifyContent:'center'}}>Asiimwe Dennis</DataTable.Cell>
          <DataTable.Cell style={{justifyContent:'center'}} numeric>256701410015</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row onPress={() => this.props.navigation.navigate("Profile")}>
          <DataTable.Cell style={{justifyContent:'center'}}>2019/02/12</DataTable.Cell>
          <DataTable.Cell style={{justifyContent:'center'}}>Asiimwe Dennis</DataTable.Cell>
          <DataTable.Cell style={{justifyContent:'center'}} numeric>256701410015</DataTable.Cell>
        </DataTable.Row>


        <DataTable.Row onPress={() => this.props.navigation.navigate("Profile")}>
          <DataTable.Cell style={{justifyContent:'center'}}>2019/02/12</DataTable.Cell>
          <DataTable.Cell style={{justifyContent:'center'}}>Asiimwe Dennis</DataTable.Cell>
          <DataTable.Cell style={{justifyContent:'center'}} numeric>256701410015</DataTable.Cell>
        </DataTable.Row>


        <DataTable.Row onPress={() => this.props.navigation.navigate("Profile")}>
          <DataTable.Cell style={{justifyContent:'center'}}>2019/02/12</DataTable.Cell>
          <DataTable.Cell style={{justifyContent:'center'}}>Asiimwe Dennis</DataTable.Cell>
          <DataTable.Cell style={{justifyContent:'center'}} numeric>256701410015</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Pagination
          page={1}
          numberOfPages={3}
          onPageChange={(page) => { console.log(page); }}
          label="1-2 of 6"
        />
      </DataTable>
    );
  }
}