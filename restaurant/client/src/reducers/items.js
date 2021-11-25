export default (items = [], action) => {
  switch (action.type) {
    case 'ITEMS/FETCH_ALL':
      return action.payload;
    case 'ITEMS/CREATE':
      return [...items, action.payload];
    case 'ITEMS/UPDATE':
      return items.map((item) => item._id === action.payload._id ? action.payload : item);
    default:
      return items;
  }
};