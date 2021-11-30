import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { useContext } from "react";
import { List } from '@mui/material';
import { ListItem, ListItemButton, ListItemText } from "@mui/material";

import OrderProvider, { orderContext } from "../../providers/OrderProvider";
import { viewContext } from "../../providers/ViewProvider";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Table, TableBody, TableContainer, TableHead, TableRow, Paper, styled, TableCell, tableCellClasses } from '@mui/material';
import { IconButton } from "@mui/material";

const ITEM = 'ITEM';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const CartList = () => {
  const { state, getOrderId, removeItemFromOrder, setItem } = useContext(orderContext);
  const { changeView } = useContext(viewContext);
  const items = useSelector((state) => state.items);

  const viewDetails = (id) => {
    setItem(id);
    changeView(ITEM);
  };

  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 200 }} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell>Item</StyledTableCell>
          <StyledTableCell align="right">Price</StyledTableCell>
          <StyledTableCell align="right"></StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {state.order.map((cartItem, index) => (
          <StyledTableRow key={items.find((item) => item._id === cartItem.item_id).name}>
            <StyledTableCell component="th" scope="row">
              {items.find((item) => item._id === cartItem.item_id).name}
              {cartItem.optionValues.map((optionValue) => <ListItem>{optionValue}</ListItem>)}
            </StyledTableCell>
            <StyledTableCell align="right">{items.find((item) => item._id === cartItem.item_id).price}</StyledTableCell>
            <StyledTableCell align="right">
              <IconButton color="primary" onClick={() => viewDetails(cartItem.item_id)}><AddCircleOutlineIcon /></IconButton>
              <IconButton onClick={() => removeItemFromOrder(index)}><DeleteOutlineOutlinedIcon sx={{ color: 'red' }}/></IconButton>
            </StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
};

export default CartList;