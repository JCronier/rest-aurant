// React
import React from 'react';

// Redux
import { useDispatch } from 'react-redux';
import { deleteTable } from '../actions/tables';

const Table = ({ table }) => {

  const dispatch = useDispatch();

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
      <button type="button" onClick={() => dispatch(deleteTable(table._id))}>DELETE</button>
      <br />
      <br />
    </div>
  );

};

export default Table;