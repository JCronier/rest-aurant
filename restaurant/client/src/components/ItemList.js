// React
import React from 'react';

// Redux
import { useSelector } from 'react-redux';

// Components
import Item from './Item';

// View States
const DASHBOARD = "DASHBOARD";

const ItemList = ({ setCurrentItemId, setViewState }) => {

  const items = useSelector((state) => state.items);

  const generateItems = () => (
    items.map((item) => (
      <Item key={item._id} item={item} setCurrentItemId={setCurrentItemId} />
    ))
  );

  return (
    <div>
      <div>
        <button type="button" onClick={() => setViewState(DASHBOARD)} style={{ height: 50, width: 200 }}>BACK TO DASHBOARD</button>
      </div>
      <br />
      <br />
      <div>
        {!items.length ? "Loading..." : generateItems()}
      </div>
    </div>
  );

};

export default ItemList;