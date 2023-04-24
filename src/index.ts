import { connect } from "mongoose";
import Product from "./models/producto";

async function connectDB() {
  const db = await connect('mongodb://localhost:27017/Productos')
  console.log('server is connected to' + " " + db.connection.db.databaseName)
}

connectDB()

async function saveData() {
  
  const cake = new Product({
  name: "Cake",
  description:"Chocolate Cake with Chips",
  image: "Null",
  price: 1000,
  stockDiscount: 12,
  inStock: true,
  flavor: "Chocolate",
  type: "Cake"
  });

  await cake.save()
  console.log(cake._id)
}

saveData()