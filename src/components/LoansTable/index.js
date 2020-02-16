import React, { Component } from 'react';
import { DataTable } from 'react-native-paper';
import { View, Text } from 'react-native';

class LoansTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <DataTable>
        <DataTable.Header>
            <DataTable.Title style={{justifyContent:'center'}}>DATE</DataTable.Title>
            <DataTable.Title style={{justifyContent:'center'}}>ISSUED</DataTable.Title>
            <DataTable.Title style={{justifyContent:'center'}}>PAID BACK</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
            <DataTable.Cell style={{justifyContent:'center'}}>Aug 14, 2019</DataTable.Cell>
            <DataTable.Cell style={{justifyContent:'center'}}>10,000</DataTable.Cell>
            <DataTable.Cell style={{justifyContent:'center'}}>5,000</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
            <DataTable.Cell style={{justifyContent:'center'}}>Aug 14, 2019</DataTable.Cell>
            <DataTable.Cell style={{justifyContent:'center'}}>10,000</DataTable.Cell>
            <DataTable.Cell style={{justifyContent:'center'}}>5,000</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
            <DataTable.Cell style={{justifyContent:'center'}}>Aug 14, 2019</DataTable.Cell>
            <DataTable.Cell style={{justifyContent:'center'}}>10,000</DataTable.Cell>
            <DataTable.Cell style={{justifyContent:'center'}}>5,000</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
            <DataTable.Cell style={{justifyContent:'center'}}>Aug 14, 2019</DataTable.Cell>
            <DataTable.Cell style={{justifyContent:'center'}}>10,000</DataTable.Cell>
            <DataTable.Cell style={{justifyContent:'center'}}>5,000</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
            <DataTable.Cell style={{justifyContent:'center'}}>Aug 14, 2019</DataTable.Cell>
            <DataTable.Cell style={{justifyContent:'center'}}>10,000</DataTable.Cell>
            <DataTable.Cell style={{justifyContent:'center'}}>5,000</DataTable.Cell>
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

export default LoansTable;
