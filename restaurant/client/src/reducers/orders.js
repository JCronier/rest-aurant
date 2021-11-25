export default (orders = [], action) => {
  switch (action.type) {
    case 'ORDERS/FETCH_ALL':
      return action.payload;
    default:
      return orders;
  }
}