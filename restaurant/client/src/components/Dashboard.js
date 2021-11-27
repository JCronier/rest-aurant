// React
import React from 'react';

// Redux
import { useSelector } from 'react-redux';

// Components 
import DashboardRow from './DashboardRow';

const Dashboard = () => {

  const items = useSelector((state) => state.items);
  const tables = useSelector((state) => state.tables);

  const getItems = (_id_table) => {

  };

  const dashboardRows = tables.map((table) => <DashboardRow table={table} />)

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



