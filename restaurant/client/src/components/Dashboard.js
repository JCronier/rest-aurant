// React
import React, { useReducer } from 'react';

// Redux
import { useSelector } from 'react-redux';

// Components 
import DashboardRow from './DashboardRow';

const Dashboard = () => {

  const items = useSelector((state) => state.items);
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

  const dashboardRows = tables.map((table) => <DashboardRow key={table.id} table={table} orderedItemsAndOptions={getOrderedItemsAndOptions(table.id)} />)

  return (
    <table>
      <tr>
        <th>Table</th>
        <th>Status</th>
        <th>Items</th>
        <th>Amount Owing</th>
        <th></th>
      </tr>
      {dashboardRows && dashboardRows}
    </table>
  );
};

export default Dashboard;



