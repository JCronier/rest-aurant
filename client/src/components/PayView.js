import React from "react";

// Context API
import { useContext, useState } from 'react';
import { orderContext } from '../providers/OrderProvider';
// import { viewContext } from "../providers/ViewProvider";

//Redux
import { useSelector } from 'react-redux';

//Components for the Stripe API
import CheckoutForm from "./CheckoutForm";

//Material UI
import Button from '@mui/material/Button';
import { TextField, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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


const PayView = () => {

  const { state } = useContext(orderContext);
  // const {  } = useContext(viewContext);

  const [tipState, setTipState] = useState(0);


  //database pull
  const items = useSelector((state) => state.items);

  const rows = state.order.map((cartItem) => {
    const itemObj = items.find((item) => item._id === cartItem.item_id)

    return (
      { 
        'name': itemObj.name,
        'price': itemObj.price
      }
    )
  })
  const OrderTable = () => {
    return (
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Item</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
  }
  
  //maps the cart || DEPRECATED
  // const cart = state.order.map((cartItem) => {
  //   const itemObj = items.find((item) => item._id ===  cartItem.item_id)

  //   return (
  //     <div key={cartItem.item_id}>
  //       {itemObj.name} || {itemObj.price}
  //     </div>
  //   )
  // })

  const subtotal = (orderState) => {
    let result = 0;
    orderState.forEach(cartItem => {
      result += items.find((item) => item._id ===  cartItem.item_id).price
    });
    //Stripe API accepts "smallest currency unit (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency)." so we are charging in cents rounded to the nearest cent
    return Math.round(result * 100);
  }

  const tips = (mySubtotal) => {
    const tipArray = [0.15, 0.18, 0.20]

    const tipAmounts = tipArray.map((tipPercent) => {
      return Math.round((mySubtotal) * tipPercent)/100
    })
    // console.log(tipAmounts, mySubtotal)
    return tipAmounts
  }

  const total = Math.round(subtotal(state.order) + tipState)

  const tableContainerStyle = {
    width:'40em'
  }

  return (
    <div>
      <Typography variant="h2" component="h2">
        Pay your bill
      </Typography>

      <Typography variant="h4">Your order:</Typography>
      <div>
        {OrderTable()}
      </div>
      <Typography>Your subtotal: {` $${parseFloat(subtotal(state.order)) / 100} CAD`}</Typography>
      
      <div>
        <Typography>Tip Amount:</Typography>
        <div>
          <Button variant="outlined" size="small" onClick={() => setTipState(tips(subtotal(state.order))[0]*100)}>15%: ${tips(subtotal(state.order))[0]}</Button>
          <Button variant="outlined" size="small" onClick={() => setTipState(tips(subtotal(state.order))[1]*100)}>18%: ${tips(subtotal(state.order))[1]}</Button>
          <Button variant="outlined" size="small" onClick={() => setTipState(tips(subtotal(state.order))[2]*100)}>20%: ${tips(subtotal(state.order))[2]}</Button>
          <div>
            <Typography>Custom Amount:</Typography>
            <TextField size="small" label="Tip %" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} onChange={(event) =>  event.target.value < 0 ? console.log('invalid number') : setTipState(((event.target.value/100) * subtotal(state.order)))} />
          </div>
        </div>
      </div>
      <Typography>Your Total: ${total /100} CAD</Typography>
      <CheckoutForm amount={total}/>
      
    </div>
  );
};

export default PayView;