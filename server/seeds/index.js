import seeder from "mongoose-seed";
import dotenv from "dotenv";
import Item from "/home/jordan/lighthouse/projects/rest-aurant/server/models/item.js";
import Table from "/home/jordan/lighthouse/projects/rest-aurant/server/models/table.js";
import Order from "/home/jordan/lighthouse/projects/rest-aurant/server/models/order.js";

dotenv.config();

const CONNECTION_URL = process.env.CONNECTION_URL;

seeder.connect(CONNECTION_URL, () => {
  seeder.loadModels([
    "../models/item.js",
    "../models/table.js",
    "../models/order.js"
  ]);

  // seeder.populateModels(data, () => {
  //   seeder.disconnect();
  // });

  seeder.clearModels([Table], () => {
    // seeder.populateModels(data, function() {
       seeder.disconnect();
      console.log("done seeding");
    // });
  });
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