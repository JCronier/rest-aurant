# REST-aurant
<div>
  <p>A Minimum Viable Product built with the MERN stack.</p>
</div>
<div>
  <p>Purpose:</p>
  <ul>
    <li>Provide restaurant owners with a system to view orders and the total dollar amount owing for each of the restaurant's tables.</li>
    <li>Provide restaurant owners with a system to manage the restaurant's menu (e.g., create, update, and delete menu items).</li>
    <li>Provide restaurant owners with a system to generate and manage QR codes for the restaurant's tables.</li>
    <li>Allow customers to order and pay from their smartphones just by scanning the QR code on the table they are seated at.</li>
  </ul>
</div>

## Customer Flow
<div>
  <p>
    Below is a demonstration of a seated customer adding items from a restaurant's menu into his or her order, submitting the order, and paying for the bill.
  </p>
</div>
<div>
  <p>Note: customer scanning the QR code on the table they are seated at is skipped.</p>
</div>
<img src="docs/client_gif.gif" width="30%" height="100%">

## Employee Flow
<div>
  <p>
    Below is a demonstration of the employee/admin dashboard being updated as customers submit and pay for their order. The gif is about a minute long and it might appear as if it is frozen. It is not frozen, it is just waiting for changes in the database.
  </p>
</div>
<div>
  <p>What you are seeing:</p>
  <ul>
    <li>The status of table 3 changes from VACANT to OCCUPIED as a customer scans the QR associated with table 3.</li>
    <li>The items column gets populated as the customer submits an order.</li>
    <li>The status of table 3 changes from OCCUPIED to PAID as the customer pays for his or her order and there are no unpaid orders left.</li>
  </ul>
</div>
<div>
  <p>Note: updates to the employee/admin dashboard matches the actions of the customer above.</p>
</div>
<img src="docs/admin_gif.gif" width="75%" height="100%">

## Dependencies
```javascript
  "dependencies": {
    "@emotion/react": "^11.7.0",
    "@emotion/styled": "^11.6.0",
    "@mui/icons-material": "^5.2.0",
    "@mui/material": "^5.2.2",
    "@mui/styles": "^5.2.2"
    "@mui/styled-engine-sc": "^5.1.0",
    "@mui/x-data-grid": "^5.0.1",
    "@stripe/react-stripe-js": "^1.6.0",
    "@stripe/stripe-js": "^1.21.1",
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "axios": "^0.24.0",
    "body-parser": "^1.19.0",
    "cors": "^2.8.5",
    "dotenv": "^8.6.0",
    "express": "^4.17.1",
    "fill-range": "^7.0.1",
    "mongoose": "^6.0.13",
    "nodemon": "^2.0.15",
    "react": "^17.0.2",
    "react-cookie": "^4.1.1",
    "react-dom": "^17.0.2",
    "react-file-base64": "^1.0.3",
    "react-redux": "^7.2.6",
    "react-scripts": "4.0.3",
    "redux-thunk": "^2.4.0",
    "stripe": "^8.191.0"
    "styled-components": "^5.3.3",
    "web-vitals": "^1.0.1"
  }
```
