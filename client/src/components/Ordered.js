import React from "react";


const Ordered = (props) => {
  return (
    <div>
      <h1>Your order is on its way</h1>
      <button onClick={() => {
        props.changeView('PAYBILL')
      }}>Pay your bill</button>
    </div>
  )
}

export default Ordered;