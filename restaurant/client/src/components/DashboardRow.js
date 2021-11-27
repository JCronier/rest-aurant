// React
import React from 'react';

// Redux
import { useSelector } from 'react-redux';

const DashboardRow = ({ table, orderedItemsAndOptions }) => {

  const items = useSelector((state) => state.items);
  const orders = useSelector((state) => state.orders);

  const renderItemsAndOptions = () => {
    return orderedItemsAndOptions.map((orderedItemAndOptions) => {
      return (
        <div>
          <div>{items.find((item) => item._id === orderedItemAndOptions.item_id).name}</div>
          <div>{orderedItemAndOptions.optionValues.map((optionValue) => <div><li>{optionValue}</li></div>)}</div>
          <br />
        </div>
      );
    });
  };

  const getTableTotal = () => {
    const ordersForTable = orders.filter((order) => order.table === table.id);

    let itemsOfOrdersForTable = [];

    ordersForTable.forEach((orderForTable) => {
      itemsOfOrdersForTable = [...itemsOfOrdersForTable, ...orderForTable.items];
    });

    const totalOfItemsOfOrdersForTable = itemsOfOrdersForTable.reduce((total, itemOfOrdersForTable) => {
      const item = items.find((item) => item._id === itemOfOrdersForTable);

      total += item.price;

      return total;
    }, 0);

    return totalOfItemsOfOrdersForTable;
  };

  return (
    <tr>
      <td>{table.id}</td>
      <td>{table.status}</td>
      <td>{items.length > 0 ? renderItemsAndOptions() : 'Loading...'}</td>
      <td>{items.length > 0 && orders.length > 0 ? getTableTotal() : 'Loading...'}</td>
      <td>EDIT STATUS</td>
    </tr>
  );
};

export default DashboardRow;