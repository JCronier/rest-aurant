export default (tables = [], action) => {
  switch (action.type) {
    case 'TABLES/FETCH_ALL':
      return action.payload;
    default:
      return tables;
  }
};