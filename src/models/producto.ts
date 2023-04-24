import {prop, getModelForClass} from "@typegoose/typegoose"

class Product {

    @prop()
    name: string

    @prop()
    description: string

    @prop()
    image: string

    @prop()
    price: number

    @prop()
    stockDiscount: number

    @prop()
    flavor: string

    @prop()
    type: string

}
const ProductModel = getModelForClass(Product)
export default ProductModel