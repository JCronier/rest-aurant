// React
import React, { useState, useEffect } from 'react';

// Redux
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateTable } from '../actions/tables';

// MUI - Components
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';

// Table States
const VACANT = 'VACANT';
const OCCUPIED = 'OCCUPIED';
const PAID = 'PAID';

const StatusTableRow = ({ table, orderedItemsAndOptions, isPaid }) => {

  const items = useSelector((state) => state.items);
  const orders = useSelector((state) => state.orders);
  const tables = useSelector((state) => state.tables);

  const [tableData, setTableData] = useState({
    _id: table._id,
    id: table.id,
    qr_code: table.qr_code,
    status: table.status
  });

  const dispatch = useDispatch();

  const renderItemsAndOptions = () => {
    return orderedItemsAndOptions.map((orderedItemAndOptions) => {
      return (
        <div>
          <div>
            <b>{items.find((item) => item._id === orderedItemAndOptions.item_id).name}</b>
          </div>
          <div>
            {orderedItemAndOptions.optionValues.map((optionValue) => <li>{optionValue}</li>)}
          </div>
        </div>
      );
    });
  };

  const updateTableStatus = (TABLE_STATUS) => {
    setTableData({ ...tableData, status: TABLE_STATUS });
    dispatch(updateTable(tableData.id, { ...tableData, status: TABLE_STATUS }));
  };

  // useEffect(() => {
  //   // Number of total orders for a given table.
  //   const numberOfOrdersForTable = orders.filter((order) => order.table === table.id).length; // 2

  //   if (numberOfOrdersForTable === 0) {
  //     updateTableStatus(VACANT);
  //     return;
  //   }



  //   // Number of total orders for a given table that have been paid.
  //   const ordersForTablePaid = orders.filter((order) => order.table === table.id && order.isPaid === false).length; // 2

  //   // Has all orders for a given table been paid?
  //   const isAllOrdersForTablePaid = (numberOfOrdersForTable === ordersForTablePaid); // Yes

  //   console.log(isAllOrdersForTablePaid)

  //   if (isAllOrdersForTablePaid) {
  //     updateTableStatus(PAID);
  //   }
  // }, []);

  // const helpMeGod = () => {
  //   // Number of total orders for a given table.
  //   const numberOfOrdersForTable = orders.filter((order) => order.table === table.id).length; // 2

  //   if (numberOfOrdersForTable === 0) {
  //     updateTableStatus(VACANT);
  //     return;
  //   }

  //   // Number of total orders for a given table that have been paid.
  //   const ordersForTablePaid = orders.filter((order) => order.table === table.id && order.isPaid === false).length; // 2

  //   // Has all orders for a given table been paid?
  //   const isAllOrdersForTablePaid = (numberOfOrdersForTable === ordersForTablePaid); // Yes

  //   console.log(isAllOrdersForTablePaid)

  //   if (isAllOrdersForTablePaid) {
  //     updateTableStatus(PAID);
  //   }
  // };

  // helpMeGod();

  const getTableTotal = () => {
    const ordersForTable = orders.filter((order) => order.table === table.id && order.isPaid === false);

    let itemsOfOrdersForTable = [];

    ordersForTable.forEach((orderForTable) => {
      itemsOfOrdersForTable = [...itemsOfOrdersForTable, ...orderForTable.items];
    });

    const totalOfItemsOfOrdersForTable = itemsOfOrdersForTable.reduce((total, itemOfOrdersForTable) => {
      const item = items.find((item) => item._id === itemOfOrdersForTable);

      total += item.price;

      return total;
    }, 0);

    return (totalOfItemsOfOrdersForTable).toFixed(2);
  };

  const listTableStatuses = () => {
    // const updateTableStatus = (TABLE_STATUS) => {
    //   setTableData({ ...tableData, status: TABLE_STATUS });
    //   dispatch(updateTable(tableData.id, { ...tableData, status: TABLE_STATUS }));
    // };

    return [
      <Button onClick={(event) => {
        event.preventDefault();
        updateTableStatus(VACANT);
      }}>
        VACANT
      </Button>,
      <Button onClick={(event) => {
        event.preventDefault();
        updateTableStatus(OCCUPIED);
      }}>
        OCCUPIED
      </Button>,
      <Button onClick={(event) => {
        event.preventDefault();
        updateTableStatus(PAID);
      }}>
        PAID
      </Button>
    ];
  };

  return (
    <TableRow hover key={table._id}>
      <TableCell>{(tables.length > 0) && table.id}</TableCell>
      <TableCell align="left">
        {
          (table.status === VACANT && isPaid === false)
          && <Chip label={table.status} sx={{ color: 'white', bgcolor: 'dodgerblue' }} />
        }
        {
          (table.status === OCCUPIED && isPaid === false)
          && <Chip label={table.status} sx={{ color: 'white', bgcolor: 'orange' }} />
        }
        {
          (isPaid === true)
          && <Chip label='PAID' sx={{ color: 'white', bgcolor: 'mediumseagreen' }} />
        }
      </TableCell>
      <TableCell align="left">{(items.length > 0 && orders.length > 0 && tables.length > 0) ? renderItemsAndOptions() : 'NO ORDERS'}</TableCell>
      <TableCell align="right">{(items.length > 0 && orders.length > 0 && tables.length > 0) ? getTableTotal() : 0}</TableCell>
      <TableCell align="center">
        <ButtonGroup>
          {listTableStatuses()}
        </ButtonGroup>
      </TableCell>
    </TableRow >
  );

};

export default StatusTableRow;