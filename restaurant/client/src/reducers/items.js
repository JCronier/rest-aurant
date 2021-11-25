export default (items = [], action) => {
  switch (action.type) {
    case 'ITEMS/FETCH_ALL':
      return action.payload;
    case 'ITEMS/CREATE':
      return [...items, action.payload];
    default:
      return items;
  }
};