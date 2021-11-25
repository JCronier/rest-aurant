export default (items = [], action) => {
  switch (action.type) {
    case 'ITEMS/FETCH_ALL':
      return action.payload;
    default:
      return items;
  }
};