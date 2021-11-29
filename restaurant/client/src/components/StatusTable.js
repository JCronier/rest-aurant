// React
import React from 'react';

// Redux
import { useSelector } from 'react-redux';

// Components 
import StatusTableRow from './StatusTableRow';

// MUI - Components
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const StatusTable = () => {

  const orders = useSelector((state) => state.orders);
  const tables = useSelector((state) => state.tables);

  const getOrderedItemsAndOptions = (tableId) => {
    const ordersForTableId = orders.filter((order) => order.table === tableId);

    let orderedItemsAndOptionsForTableId = [];

    ordersForTableId.map((orderForTableId) => {
      orderedItemsAndOptionsForTableId = [...orderedItemsAndOptionsForTableId, ...orderForTableId.options];
    });

    return orderedItemsAndOptionsForTableId;
  };

  const generateStatusTableRows = () => (
    tables.map((table) => (
      <StatusTableRow key={table.id} table={table} orderedItemsAndOptions={getOrderedItemsAndOptions(table.id)} />
    ))
  );

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Table</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Items</TableCell>
            <TableCell align="right">Balance (CAD)</TableCell>
            <TableCell align="center">Modify Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(orders.length > 0 && tables.length > 0) && generateStatusTableRows()}
        </TableBody>
      </Table>
    </TableContainer>
  );

};

export default StatusTable;