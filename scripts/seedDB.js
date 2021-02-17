const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/farm-to-table",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);

const userSeed = [
  {
    email: "admin@mail.com",
    name: "Admin Admin",
    address: "123 Admin Rd",
    password: "$2b$10$SBkLhziZQyGqPmMTlG0HROkNXh2LjpPJ7GovrCEco/3nR8wPgILVm", //admin1234
    role: "admin",
  },
  {
    email: "ngtych4@gmail.com",
    name: "Neil Gandhi",
    address: "7506 SCUPPER DR",
    password: "$2b$10$kH9V0nnPPRc1fwaNzSCBxOgCO4QAFC0AoWAOejO8Ses.TuyVDXF22", //password1234
    role: "customer",
  },
];

const productsSeed = [
  {
    name: "Apples",
    description: "Red and Delicious",
    unitType: "pounds",
    unitSize: 1,
    price: 2.99,
    quantity: 10,
    category: "fruit",
    pathway: "/assets/product_images/fruits/apples.png",
  },
  {
    name: "Watermelon",
    description: "Sweet and Delicious!",
    unitType: "pounds",
    unitSize: 1,
    price: 1.99,
    quantity: 20,
    category: "fruit",
    pathway: "/assets/product_images/fruits/watermelon.png",
  },
  {
    name: "Blueberries",
    description: "They're blue?",
    unitType: "pounds",
    unitSize: 1,
    price: 3.49,
    quantity: 25,
    category: "fruit",
    pathway: "/assets/product_images/fruits/blueberries.png",
  },
  {
    name: "Cabbage",
    description: "Coleslaw anyone?",
    unitType: "pounds",
    unitSize: 1,
    price: 2.29,
    quantity: 10,
    category: "vegetable",
    pathway: "/assets/product_images/vegetables/cabbage.png",
  },
  {
    name: "Chicken",
    description: "Cluck Cluck...",
    unitType: "pounds",
    unitSize: 1,
    price: 1.79,
    quantity: 30,
    category: "meat",
    pathway: "/assets/product_images/meat/chicken.png",
  },
  {
    name: "Milk",
    description: "Does the body good!",
    unitType: "pints",
    unitSize: 4,
    price: 2.99,
    quantity: 40,
    category: "dairy",
    pathway: "/assets/product_images/dairy/milk.png",
  },
];

// seed initial user data
db.User.deleteMany({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

// seed initial products data
db.Products.deleteMany({})
  .then(() => db.Products.collection.insertMany(productsSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
