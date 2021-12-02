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

  const helpMeGod = (table) => {
    // Number of total orders for a given table.
    // console.log(orders, table);

    const numberOfOrdersForTable = orders.filter((order) => order.table === table).length; // 1



    if (numberOfOrdersForTable === 0 || tables[table - 1].status === "VACANT") {
      // console.log('executing', numberOfOrdersForTable)
      return false;
    }

    // Number of total orders for a given table that have been paid.
    const ordersForTablePaid = orders.filter((order) => order.table === table && order.isPaid === true).length; // 0

    // Has all orders for a given table been paid?
    const isAllOrdersForTablePaid = (numberOfOrdersForTable === ordersForTablePaid); // Yes

    console.log(isAllOrdersForTablePaid, numberOfOrdersForTable, ordersForTablePaid)

    return isAllOrdersForTablePaid;

    // console.log(isAllOrdersForTablePaid)

    // if (isAllOrdersForTablePaid) {
    //   updateTableStatus(PAID);
    // }
  };

  const generateStatusTableRows = () => (
    tables.map((table) => (
      <StatusTableRow key={table.id} table={table} orderedItemsAndOptions={getOrderedItemsAndOptions(table.id)} isPaid={helpMeGod(table.id)} />
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