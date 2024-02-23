import { NextRequest, NextResponse } from "next/server";
import { User } from "../../../../models/User";
import { Product } from "../../../../models/Product";
import { Comment } from "../../../../models/Comment";
// Request type is buidt in in next js but we use Next Request type

// POST
export async function POST(req: NextRequest) {
  const body = await req.json()
  await Product.create(body)

  return new Response("hello post");
}


// DELETE
export async function DELETE(req: Request) {
  const body = await req.json()
  const id = body.id
  await Product.deleteOne(id)
  



  return NextResponse.json({ data2,data3,bata ,dataall});
}

// GET
export async function GET(req: NextRequest) {
  const data = Product.find({})

  return NextResponse.json({data });
}
