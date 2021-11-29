// React
import React from 'react';

// Redux
import { useSelector } from 'react-redux';

// Components
import Item from './Item';

// MUI - Components
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'

// View States
const DASHBOARD = "DASHBOARD";

const ItemList = ({ setCurrentItemId, setViewState }) => {

  const items = useSelector((state) => state.items);

  const generateItems = () => (
    items.map((item) => (
      <Item key={item._id} item={item} setCurrentItemId={setCurrentItemId} />
    ))
  );

  return (
    <TableContainer component={Paper} sx={{ maxHeight: 560 }}>
      {/* <div>
        <button type="button" onClick={() => setViewState(DASHBOARD)} style={{ height: 50, width: 200 }}>BACK TO DASHBOARD</button>
      </div> */}
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>PHOTO</TableCell>
            <TableCell>NAME</TableCell>
            <TableCell>OPTIONS</TableCell>
            <TableCell>CATEGORY</TableCell>
            <TableCell>PRICE</TableCell>
            <TableCell>DESCRIPTION</TableCell>
            <TableCell>TAGS</TableCell>
            <TableCell align="center">MODIFY ITEM</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.length > 0 && generateItems()}
        </TableBody>
      </Table>
    </TableContainer>
  );

};

export default ItemList;