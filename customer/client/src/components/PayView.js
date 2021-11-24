import React from "react";

// Context API
import { useContext } from 'react';
import { orderContext } from '../providers/OrderProvider';
import { viewContext } from "../providers/ViewProvider";

const PayView = ({ }) => {

  const { } = useContext(orderContext);
  const { } = useContext(viewContext);

  return (
    <div>
      <h1>Pay your bill</h1>
    </div>
  );
};

export default PayView;