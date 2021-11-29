import React from 'react';

import { useSelector } from 'react-redux';

const Receipt = (props) => {

  const receipts = useSelector((state) => state.receipts);

  const items = useSelector((state) => state.items)

  const userReceipt = receipts.find((receipt) => receipt.order_id === props.receiptOrderId) 

  console.log('receipts is',receipts)

  console.log('my receipt is: ', userReceipt)
  
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
      Items: {userItems}<br></br>
      Confirmation Code: {userReceipt.confirmation_code} 
      Date: {userReceipt.date_created}
      test
    </div>
  )
}

export default Receipt;