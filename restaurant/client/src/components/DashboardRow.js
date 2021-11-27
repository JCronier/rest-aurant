// React
import React from 'react';

const DashboardRow = ({ table }) => {

  return (
    <tr>
      <td>{table.id}</td>
      <td>{table.status}</td>
      <td>CS</td>
      <td>CS</td>
      <td>EDIT STATUS</td>
    </tr>
  );
};

export default DashboardRow;



