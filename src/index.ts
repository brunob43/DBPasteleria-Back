import { connect } from "mongoose";
import Product from "./models/producto";

async function connectDB() {
  const db = await connect("mongodb://0.0.0.0:27017/Productos")
  console.log('server is connected to' + " " + db.connection.db.databaseName)
}

connectDB()

async function saveData() {

  /*const cake = new Product({
  name: "Cake",
  description:"Chocolate Cake with Chips",
  image: "Null",
  price: 1000,
  stockDiscount: 0.50,
  inStock: true,
  flavor: "Chocolate",
  type: "Cake"
  });

  await cake.save()
  console.log(cake)*/

  const products = await Product.find({}, {name: 1, price:1, _id: 0})
  console.log(products)

  const product = await Product.findById("64482253d46e35aec6a9a204")
  console.log(product)

  const updateProduct = await Product.findOneAndUpdate(
  {_id: "64482253d46e35aec6a9a204"}, 
  {name: "Cupcake", description: "Chocolate Cupcake with white frosting"}, 
  {new: true})
  console.log(updateProduct)

}

saveData()

