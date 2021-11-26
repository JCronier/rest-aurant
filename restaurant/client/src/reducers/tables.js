export default (tables = [], action) => {
  switch (action.type) {
    case 'TABLES/FETCH_ALL':
      return action.payload;
    case 'TABLES/CREATE':
      return [...tables, action.payload];
    default:
      return tables;
  }
};