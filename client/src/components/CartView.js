import React from 'react';
import { useSelector } from 'react-redux';

const CartView = (props) => {
  //maps the order array into a human readable order
  const cart = props.state.order.map((item) => {
    return (
      <li>
        {item.item_id}
      </li>
    )
  })

  return (
    <div>
      <ul>
        {cart}
      </ul>

      <button onClick={() => props.changeView('MENU')}>Go Back</button>
      {/* makes a post request utilizing our current state to the orders document */}
      <button onClick={() => {
        console.log(props.state)
        props.changeView('ORDERED')
      }}>Order</button>
    </div>
  )
}

export default CartView;