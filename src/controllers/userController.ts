import { Request, Response } from "express"
const getUsers = async(_req:Request, res:Response) => {
    console.log('mas fruta users')
    res.send('fruta users')
  }
  module.exports = {getUsers}