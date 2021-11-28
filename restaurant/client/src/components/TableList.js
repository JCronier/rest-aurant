// React
import React from 'react';

// Redux
import { useSelector } from 'react-redux';

// Components
import Table from './Table';

// View States
const DASHBOARD = "DASHBOARD";

const TableList = ({ setViewState }) => {

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
        <button type="button" onClick={() => setViewState(DASHBOARD)} style={{ height: 50, width: 200 }}>BACK TO DASHBOARD</button>
      </div>
      <br />
      <br />
      <div>
        {!tables.length ? "Loading..." : generateTables()}
      </div>
    </div>
  );

};

export default TableList;