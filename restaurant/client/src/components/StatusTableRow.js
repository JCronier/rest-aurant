// React
import React, { useState } from 'react';

// Redux
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateTable } from '../actions/tables';

// Styles
import './Test.css';

const StatusTableRow = ({ table, orderedItemsAndOptions }) => {

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
          <div>{items.find((item) => item._id === orderedItemAndOptions.item_id).name}</div>
          <div>{orderedItemAndOptions.optionValues.map((optionValue) => <div><li>{optionValue}</li></div>)}</div>
          <br />
        </div>
      );
    });
  };

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

    return totalOfItemsOfOrdersForTable;
  };

  const listTableStatuses = () => {
    const updateTableStatus = (TABLE_STATUS) => {
      setTableData({ ...tableData, status: TABLE_STATUS });
      dispatch(updateTable(tableData.id, { ...tableData, status: TABLE_STATUS }));
    };

    return [
      <a href="#" onClick={(event) => {
        event.preventDefault();
        updateTableStatus("VACANT")
      }}>
        VACANT
      </a>,
      <a href="#" onClick={(event) => {
        event.preventDefault();
        updateTableStatus("OCCUPIED")
      }}>
        OCCUPIED
      </a>,
      <a href="#" onClick={(event) => {
        event.preventDefault();
        updateTableStatus("PAID")
      }}>
        PAID
      </a>
    ];
  };

  return (
    <tr>
      <td style={{ border: '1px solid black' }}>{items.length > 0 && orders.length > 0 && tables.length > 0 ? table.id : 'Loading...'}</td>
      <td style={{ border: '1px solid black' }}>{items.length > 0 && orders.length > 0 && tables.length > 0 ? table.status : 'Loading...'}</td>
      <td style={{ border: '1px solid black' }}>{items.length > 0 && orders.length > 0 && tables.length > 0 ? renderItemsAndOptions() : 'Loading...'}</td>
      <td style={{ border: '1px solid black' }}>{items.length > 0 && orders.length > 0 && tables.length > 0 ? getTableTotal() : 'Loading...'}</td>
      <td style={{ border: '1px solid black', 'backgroundColor': '#04AA6D' }}>
        <div className={items.length > 0 && orders.length > 0 && tables.length > 0 ? 'dropdown' : ''}>
          <button className="dropbtn">{items.length > 0 && orders.length > 0 && tables.length > 0 ? 'EDIT STATUS' : 'Loading...'}</button>
          <div className="dropdown-content">
            {items.length > 0 && orders.length > 0 && tables.length > 0 ? listTableStatuses() : 'Loading...'}
          </div>
        </div>
      </td>
    </tr >
  );
};

export default StatusTableRow;