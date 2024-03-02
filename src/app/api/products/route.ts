import { NextRequest, NextResponse } from "next/server";
import { User } from "../../../../models/User";
import { Product } from "../../../../models/Product";
import { Comment } from "../../../../models/Comment";
// Request type is buidt in in next js but we use Next Request type

// POST
export async function POST(req: NextRequest) {
  const body = await req.json()
  await Product.create(body)

  return NextResponse.json({message : "post created succefuly"},{status : 201});
}


// DELETE
export async function DELETE(req: Request) {
  const body = await req.json()
  const id = body.id
  if (!id) {
    return NextResponse.json({message : "post doensn't exist "},{status : 400})
  }
  await Product.deleteOne({_id : id})


  return NextResponse.json({ message : "post deleted succefuly"},{status : 200});
}

// GET
export async function GET(req: NextRequest) {
  const data = Product.find({})
  return NextResponse.json({data },{status : 200});
}
