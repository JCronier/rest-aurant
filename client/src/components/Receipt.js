import { Paper, Typography } from '@mui/material';
import React from 'react';

import { useSelector } from 'react-redux';

const Receipt = (props) => {

  const receipts = useSelector((state) => state.receipts);

  const items = useSelector((state) => state.items)

  const userReceipt = receipts.find((receipt) => receipt.order_id === props.receiptOrderId) 

  console.log('receipts is',receipts)

  console.log('my receipt is: ', userReceipt)
  
  const userItems = userReceipt.items.map((cartItem) => {
    const itemObj = items.find((item) => item._id === cartItem)
    
    return (
      <Typography>
        {itemObj.name}
      </Typography>
    )
  })

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  const today  = new Date();

  const receiptStyle ={
    width:'25em',
    padding:'1em',
    'margin-top':'1em'
  }

  return (
    <div>
      <Paper elevation={4} style={receiptStyle}>
        <Typography>Total: ${(userReceipt.amount_paid /100).toFixed(2)}</Typography>
        <Typography>Items: </Typography>{userItems}<br></br>
        <Typography>Confirmation Code: {userReceipt.confirmation_code}</Typography> 
        <Typography>Date: {today.toLocaleDateString("en-US", options)}</Typography>
      </Paper>
    </div>
  )
}

export default Receipt;