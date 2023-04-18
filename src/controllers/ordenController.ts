import { Request, Response } from "express"


const getOrden = async(_req:Request, res:Response) => {
  console.log('mas fruta')
  res.send('fruta')
}
module.exports = {getOrden}
