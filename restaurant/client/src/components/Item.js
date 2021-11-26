// React
import React from 'react';

// Redux
import { useDispatch } from 'react-redux';
import { deleteItem } from '../actions/items';

const Item = ({ item, setCurrentItemId }) => {

  const dispatch = useDispatch();

  return (
    <div>
      <div>_id: {item._id}</div>
      <div>name: {item.name}</div>
      <div>price: {item.price}</div>
      <div>description: {item.description}</div>
      <div>category: {item.category}</div>
      <div>options: {JSON.stringify(item.options)}</div>
      <div>tags: {JSON.stringify(item.tags)}</div>
      <div>image_url: NOT INCLUDED BECAUSE IT'S SO LONG (item.image_url)</div>
      <div>
        <div>item_url image (NOT PART OF SCHEMA):</div>
        <img src={item.image_url} alt="image_url" height="100" width="100" />
      </div>
      <button type="button" onClick={() => setCurrentItemId(item._id)}>UPDATE</button>
      <button type="button" onClick={() => dispatch(deleteItem(item._id))}>DELETE</button>
      <br />
      <br />
    </div>
  );

};

export default Item;