import * as React from 'react';
import { DataTable } from 'react-native-paper';
import {ScrollView, Image, Dimensions} from 'react-native';
import MainStyles from '../../common/MainStyles';

// create a component
export default class LoansTable extends React.Component {
    render() {
        return (
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>DATE</DataTable.Title>
                    <DataTable.Title>ISSUED</DataTable.Title>
                    <DataTable.Title>PAID-BACK</DataTable.Title>
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
