// React
import React from 'react';

// Redux
import { useSelector } from 'react-redux';

// Components 
import DashboardRow from './DashboardRow';

const Dashboard = () => {

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

  const generateDashboardRows = () => (
    tables.map((table) => (
      <DashboardRow key={table.id} table={table} orderedItemsAndOptions={getOrderedItemsAndOptions(table.id)} />
    ))
  );

  return (
    <table style={{ border: '1px solid black' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid black' }}>Table</th>
          <th style={{ border: '1px solid black' }}>Status</th>
          <th style={{ border: '1px solid black' }}>Items</th>
          <th style={{ border: '1px solid black' }}>Amount Owing</th>
          <th style={{ border: '1px solid black' }}>Edit</th>
        </tr>
      </thead>
      <tbody>
        {orders.length > 0 && tables.length > 0 ? generateDashboardRows() : <tr><td>Loading...</td></tr>}
      </tbody>
    </table>
  );
};

export default Dashboard;