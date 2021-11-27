import React from 'react';

import { useSelector } from 'react-redux';

const Receipt = (props) => {

  const receipts = useSelector((state) => state.receipts);

  const userReceipt = receipts.find((receipt) => receipt.order_id === props.receiptOrderId) 

  console.log('receipts is',receipts)
  
  const userItems = userReceipt.items.map((item) => {
    return (
      <div>
        {item}
      </div>
    )
  })

  return (
    <div>
      Total: {userReceipt.amount_paid /100} <br></br>
      Confirmation Code: {userReceipt.confirmation_code} <br></br>
      Items: {userItems}
      Date: {userReceipt.date_created}

    </div>
  )
}

export default Receipt;