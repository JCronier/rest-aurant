export default (items = [], action) => {
  switch (action.type) {
    case 'ITEMS/FETCH_ALL':
      return action.payload;
    case 'ITEMS/CREATE':
      return [...items, action.payload];
    case 'ITEMS/UPDATE':
      return items.map((item) => item._id === action.payload._id ? action.payload : item);
    case 'ITEMS/DELETE':
      return items.filter((item) => item._id !== action.payload);
    default:
      return items;
  }
};