export default (receipts = [], action) => {
  switch (action.type) {
    case 'RECEIPTS/FETCH_ALL':
      return action.payload;
    case 'RECEIPTS/CREATE':
      return [...receipts, action.payload]
    default:
      return receipts;
  }
};