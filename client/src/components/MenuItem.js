import React from 'react';

const MenuItem = ({ item }) => {
  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item._id}</p>
      <p> {item.price}</p>
      <p>{item.description}</p>
    </div>
  )
};

export default MenuItem;

// {
//   _id: "619b0ae6f5d42f8e3d159cc0",
//   name: "Pad Thai Carbonara",
//   price: 14.99,
//   description: "Pad thai carbonara",
//   category: "Food",
//   options: [
//   "parmesan"
//   ],
//   tags: [
//   "pasta, vegetables"
//   ],
//   __v: 0