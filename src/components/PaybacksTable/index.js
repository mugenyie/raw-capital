import React, { Component } from 'react';
import { DataTable } from 'react-native-paper';
import { View, Text } from 'react-native';

class PaybacksTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <DataTable>
        <DataTable.Header>
            <DataTable.Title>DATE</DataTable.Title>
            <DataTable.Title>PAID BACK</DataTable.Title>
            <DataTable.Title>AMOUNT LEFT</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
            <DataTable.Cell>Aug 14, 2019</DataTable.Cell>
            <DataTable.Cell>10,000</DataTable.Cell>
            <DataTable.Cell>5,000</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
            <DataTable.Cell>Aug 14, 2019</DataTable.Cell>
            <DataTable.Cell>10,000</DataTable.Cell>
            <DataTable.Cell>5,000</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
            <DataTable.Cell>Aug 14, 2019</DataTable.Cell>
            <DataTable.Cell>10,000</DataTable.Cell>
            <DataTable.Cell>5,000</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
            <DataTable.Cell>Aug 14, 2019</DataTable.Cell>
            <DataTable.Cell>10,000</DataTable.Cell>
            <DataTable.Cell>5,000</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
            <DataTable.Cell>Aug 14, 2019</DataTable.Cell>
            <DataTable.Cell>10,000</DataTable.Cell>
            <DataTable.Cell>5,000</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
            <DataTable.Cell>Aug 14, 2019</DataTable.Cell>
            <DataTable.Cell>10,000</DataTable.Cell>
            <DataTable.Cell>5,000</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
            <DataTable.Cell>Aug 14, 2019</DataTable.Cell>
            <DataTable.Cell>10,000</DataTable.Cell>
            <DataTable.Cell>5,000</DataTable.Cell>
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

export default PaybacksTable;
