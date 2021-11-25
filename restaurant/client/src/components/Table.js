// React
import React from 'react';

const Table = ({ table }) => {

  return (
    <div>
      <div>_id: {table._id}</div>
      <div>id: {table.id}</div>
      <div>qr_code: {table.qr_code}</div>
      <div>
        <div>
          qr_code image (NOT PART OF SCHEMA):
        </div>
        <div>
          <img src={table.qr_code} alt="qr_code" height="100" width="100" />
        </div>
      </div>
      <div>status: {table.status}</div>
      <br />
    </div>
  );

};

export default Table;