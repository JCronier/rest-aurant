// React
import React from 'react';

// Redux
import { useSelector } from 'react-redux';

// Components
import MenuItem from './MenuItem';

const Menu = (props) => {
  const items = useSelector((state) => state.items);

  return (
    <div>
      {
        !items.length ? "Loading..." : (items.map((item) => (<MenuItem key={item._id} item={item} onClick={props.changeView} setItem={props.setItem} />)))
      }
      {props.state.order.length && <button onClick={() => props.changeView('CART')}>Go to checkout/Cart</button>}
    </div>
  );
};

export default Menu;