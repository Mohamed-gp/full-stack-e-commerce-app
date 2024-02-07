import { NextResponse } from "next/server";
import { connectToDb } from "../../../../lib/dataBase";
import { Product } from "../../../../models/Product";


export async function GET(request: Request) {
  try {
    connectToDb();
    const products = await Product.find();
    return NextResponse.json(products);
  } catch (error: any) {
    return NextResponse.json(error);
  }
}
