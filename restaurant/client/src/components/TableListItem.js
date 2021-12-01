// React
import React from 'react';

// Redux
import { useDispatch } from 'react-redux';
import { deleteTable } from '../actions/tables';

// MUI - Components
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';

const TableListItem = ({ table }) => {

  const dispatch = useDispatch();

  return (
    <TableRow>
      <TableCell>{table.id}</TableCell>
      <TableCell align="center"><img src={table.qr_code} alt="qr_code" height="100" width="100" /></TableCell>
      <TableCell align="center"><Button variant="outlined" onClick={() => dispatch(deleteTable(table._id))}>DELETE</Button></TableCell>
    </TableRow>
  );

};

export default TableListItem;