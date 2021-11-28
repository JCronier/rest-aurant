export default (tables = [], action) => {
  switch (action.type) {
    case 'TABLES/FETCH_ALL':
      return action.payload;
    case 'TABLES/CREATE':
      return [...tables, action.payload];
    case 'TABLES/UPDATE':
      return tables.map((table) => table.id === action.payload.id ? action.payload : table);
    default:
      return tables;
  }
};
