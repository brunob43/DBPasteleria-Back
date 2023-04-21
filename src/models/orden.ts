import { Product } from "./producto"

export interface Order {
    id: string,
    nameClient: string,
    emailClient: string,
    contactNumber: string, 
    description: string,
    address: string,
    items: [{
        product: Product,
        quantity: number
    }]
    priceTotal: string
}

