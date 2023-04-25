import {prop, getModelForClass} from "@typegoose/typegoose"

class Product {

    @prop({required: true}) // Mongoose
    name: string // TypeScript

    @prop({required: true})
    description: string

    @prop({required: true})
    image: string

    @prop({required: true})
    price: number

    @prop({required: true})
    stockDiscount: number

    @prop({required: true})
    flavor: string

    @prop({required: true})
    inStock: boolean = true

    @prop({required: true})
    type: string

}
const ProductModel = getModelForClass(Product)
export default ProductModel