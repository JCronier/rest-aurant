// React
import React from 'react';

// Redux
import { useDispatch } from 'react-redux';
import { deleteItem } from '../actions/items';

// MUI - Components
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';

const Item = ({ item, setCurrentItemId }) => {

  const dispatch = useDispatch();

  return (
    <TableRow>
      {/* <TableCell><img src={item.image_url} /></TableCell> */}
      <TableCell>PHOTO</TableCell>
      <TableCell>{item.name}</TableCell>
      <TableCell>{(item.options).join(', ')}</TableCell>
      <TableCell>{item.category}</TableCell>
      <TableCell>$ {(item.price).toFixed(2)}</TableCell>
      <TableCell>{item.description}</TableCell>
      <TableCell>{(item.tags).join(', ')}</TableCell>
      <TableCell align="center">
        <ButtonGroup>
          <Button onClick={() => setCurrentItemId(item._id)}>UPDATE</Button>
          <Button onClick={() => dispatch(deleteItem(item._id))}>DELETE</Button>
        </ButtonGroup>
      </TableCell>
    </TableRow>
  );

};

export default Item;