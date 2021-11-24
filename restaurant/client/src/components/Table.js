// React
import React from 'react';

const Table = ({ table }) => {

  return (
    <div>
      <div>_id: {table._id}</div>
      <div>_d: {table.id}</div>
      <div>qr_code: {table.qr_code}</div>
      <div>status: {table.status}</div>
      <br />
    </div>
  );

};

export default Table;