import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const ItemView = (props) => {
  // console.log(props.itemId.item, 'bluhhh')

  const items = useSelector((state) => state.items);

  const item = items.find(item => {
    return item._id === props.itemId.item;
  });

  // Options Handling
  const [optionsState, setOptionsState] = useState(
    new Array(item.options.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedOptionsState = optionsState.map((item, index) =>
      (index === position ? !item : item)
    );

    setOptionsState(updatedOptionsState);
  };

  const options = item.options.map((option, index) => {
    return (
      <li key={index}>
        <input id={index} type="checkbox" name={option} value={option} checked={optionsState[index]} onChange={() => handleOnChange(index)}>
        </input>
        <label htmlFor={option}>
          {option}
        </label>
      </li>
    )
  });

  const mapOptions = (special) => {
    const finalOptions = optionsState.map((option, index) => {
      if (option) {
        return item.options[index];
      }
    });

    finalOptions.push(special);

    return finalOptions;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const optionsArray = mapOptions(event.target.customOption.value);

    console.log(optionsArray);

    props.addItem(item._id, optionsArray);

    props.changeView('MENU');
  }

  return (
    <div>
      {props.itemId.item}
      {item.name}
      <form id="radioOptions" onSubmit={event => handleSubmit(event)}>
        <ul>
          {options}
        </ul>
        <input type="text" name="customOption" placeholder="Special instructions..."></input>
        <button type="submit">Add to cart</button>
      </form>
      {/* on click will send the item and its options to the addItem function */}

    </div>
  );
}

export default ItemView;