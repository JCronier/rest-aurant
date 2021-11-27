// React
import React from 'react';

// Redux
import { useSelector } from 'react-redux';

const DashboardRow = ({ table, orderedItemsAndOptions }) => {

  const items = useSelector((state) => state.items);

  return (
    <tr>
      <td>{table.id}</td>
      <td>{table.status}</td>
      <td>
        {
          items.length > 0 ? orderedItemsAndOptions.map((orderedItemAndOptions) => {
            return (
              <div>
                <div>{items.find((item) => item._id === orderedItemAndOptions.item_id).name}</div>
                <div>{orderedItemAndOptions.optionValues.map((optionValue) => <div><li>{optionValue}</li></div>)}</div>
                <br />
              </div>
            );
          }) : 'Loading...'
        }
      </td>
      <td>CS</td>
      <td>EDIT STATUS</td>
    </tr>
  );
};

export default DashboardRow;



