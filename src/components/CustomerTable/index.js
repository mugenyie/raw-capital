import * as React from 'react';
import { DataTable } from 'react-native-paper';
import {ScrollView, Image, Dimensions} from 'react-native';
import MainStyles from '../../common/styles';

export default class CustomerTable extends React.Component {
  render() {
    return (
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title numeric>Phone</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row onPress={() => alert('hello')}>
          <DataTable.Cell>Asiimwe Dennis</DataTable.Cell>
          <DataTable.Cell numeric>256701410015</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row onPress={() => alert('hello')}>
          <DataTable.Cell>Asiimwe Dennis</DataTable.Cell>
          <DataTable.Cell numeric>256701410015</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row onPress={() => alert('hello')}>
          <DataTable.Cell>Asiimwe Dennis</DataTable.Cell>
          <DataTable.Cell numeric>256701410015</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row onPress={() => alert('hello')}>
          <DataTable.Cell>Asiimwe Dennis</DataTable.Cell>
          <DataTable.Cell numeric>256701410015</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row onPress={() => alert('hello')}>
          <DataTable.Cell>Asiimwe Dennis</DataTable.Cell>
          <DataTable.Cell numeric>256701410015</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row onPress={() => alert('hello')}>
          <DataTable.Cell>Asiimwe Dennis</DataTable.Cell>
          <DataTable.Cell numeric>256701410015</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row onPress={() => alert('hello')}>
          <DataTable.Cell>Asiimwe Dennis</DataTable.Cell>
          <DataTable.Cell numeric>256701410015</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row onPress={() => alert('hello')}>
          <DataTable.Cell>Asiimwe Dennis</DataTable.Cell>
          <DataTable.Cell numeric>256701410015</DataTable.Cell>
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