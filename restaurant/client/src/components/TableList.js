// React
import React from 'react';

// Redux
import { useSelector } from 'react-redux';

// MUI - Components
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';

// Components
import TableListItem from './TableListItem';

// View States
const DASHBOARD = "DASHBOARD";

const TableList = ({ setViewState }) => {

  // Retrieve all records of the Table model
  // that is in the tables store.
  const tables = useSelector((state) => state.tables);

  // Generate array of Table components.
  const generateTableListItems = () => (
    tables.map((table) => (
      <TableListItem key={table._id} table={table} />
    ))
  );

  return (
    <TableContainer component={Paper} sx={{ maxHeight: 560 }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>TABLE</TableCell>
            <TableCell align="center">QR CODE</TableCell>
            <TableCell align="center">DELETE TABLE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tables.length > 0 && generateTableListItems()}
        </TableBody>
      </Table>
    </TableContainer >
  );

};

export default TableList;