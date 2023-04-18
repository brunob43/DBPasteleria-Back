import { Request, Response } from "express"

const getProducts = async(_req:Request, res:Response) => {
    console.log('mas fruta product')
    res.send('fruta product')
  }
  module.exports = {getProducts}