import { NextResponse } from "next/server";
import { connectToDb } from "../../../../lib/dataBase";
import { Product } from "../../../../models/Product";


export async function handler(req: Request) {
  const {method} = req
  connectToDb()
  if (method === "GET") {
    try {
      const products = await Product.find()
      return Response.json(products)
    } catch (error) {
      throw new Error("error in fetching ")
    }
  }
}




