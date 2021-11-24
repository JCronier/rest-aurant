import seeder from "mongoose-seed";
import dotenv from "dotenv";
import Item from "../models/item";
import Table from "../models/table";
import Order from "../models/order";

dotenv.config();

const CONNECTION_URL = process.env.CONNECTION_URL;

seeder.connect(CONNECTION_URL, () => {
  seeder.loadModels([
    "../models/item.js",
    "../models/order.js",
    "../models/table.js"
  ]);

  seeder.populateModels(data, () => {
    seeder.disconnect();
  });

  // seeder.clearModels([Item, Order, Table], () => {
  //   seeder.populateModels(data, function() {
  //     seeder.disconnect();
  //   });
  // });
});

const data = [
  {
    "model": "Item",
    "documents": [
      {
        "name": "",
        "price": 0,
        "description": "",
        "category": "",
        "options": [""],
        "tags": [""],
        "image_url": ""
      }
    ]
  }
];

// {
//   "model": "Order",
//   "documents": [
//     {
//       "id": 0,
//       "table": 0,
//       "items": [{}],
//       "isPaid": false
//     }
//   ]
// }

// {
//   "model": "Table",
//   "documents": [
//     {
//       "id": 0,
//       "qr_code": "",
//       "status": "",
//     }
//   ]
// }