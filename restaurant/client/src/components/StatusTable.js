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
import Paper from '@mui/material/Paper';

const StatusTable = () => {

  const orders = useSelector((state) => state.orders);
  const tables = useSelector((state) => state.tables);

  const getOrderedItemsAndOptions = (tableId) => {
    const ordersForTableId = orders.filter((order) => (order.table === tableId && order.isPaid === false));

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
    <TableContainer component={Paper} sx={{ maxHeight: 565 }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>TABLE</TableCell>
            <TableCell align="left">STATUS</TableCell>
            <TableCell align="left">ITEMS</TableCell>
            <TableCell align="right">BALANCE (CAD)</TableCell>
            <TableCell align="center">MODIFY STATUS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tables.length > 0 && generateStatusTableRows()}
        </TableBody>
      </Table>
    </TableContainer>
  );

};

export default StatusTable;