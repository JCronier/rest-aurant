// React
import React from 'react';

// Redux
import { useSelector } from 'react-redux';

// Components
import MenuItem from './MenuItem';

// MUI
import { CircularProgress } from '@material-ui/core';

const Menu = () => {
  const items = useSelector((state) => state.items);

  console.log(items, 'being logged in our menu component');

  // const menuItems = items.map((item) => {
  //   return (<MenuItem item={item} />);
  // })

  // // console.log(menuItems, 'bjbngjgbhjkdhfg')

  // return (
  //   !items.length ? "EMPTY" : "SOMETHING"
  // )

  return (
    <div>
      {
        !items.length ? <CircularProgress /> : (items.map((item) => (<MenuItem key={item._id} item={item} />)))
      }
    </div>
  );
};

export default Menu;