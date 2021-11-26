// React
import React from 'react';

// Redux
import { useSelector } from 'react-redux';

// Components
import Table from './Table';

const TableList = () => {

  // Retrieve all records of the Table model
  // that is in the tables store.
  const tables = useSelector((state) => state.tables);

  // Generate array of Table components.
  const generateTables = () => (
    tables.map((table) => (
      <Table key={table._id} table={table} />
    ))
  );

  return (
    <div>
      <div>
        {!tables.length ? "Loading..." : generateTables()}
      </div>
    </div>
  );

};

export default TableList;