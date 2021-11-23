import React from 'react';
import { useSelector } from 'react-redux';

const ItemView = (props) => {
  console.log(props.itemId.item, 'bluhhh')

  const items = useSelector((state) => state.items);

  const item = items.find(item => {
    return item._id === props.itemId.item;
  });

  const options = item.options.map((option) => {
    return (
      <li>
        <input type="radio" name={option}>
        </input>
        <label for={option}>
          {option}
        </label>
      </li>
    )
  });

  // console.log(item, 'identifiable', 'our item id is', props.itemId);

  return (
    <div>
      {props.itemId.item}
      {item.name}
      <ul>
        {options}
      </ul>
      <button onClick={(event) => console.log(event)}>Add to cart</button>
    </div>
  );
}

export default ItemView;

// {item.options.map((option) => {
//   return (
//     <li key={option}>
//       <input type="radio" name={option} >{option}test</input>
//     </li>
//   )
// })}