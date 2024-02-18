import { NextRequest, NextResponse } from "next/server";
import { User } from "../../../../models/User";
import { Product } from "../../../../models/Product";
import { Comment } from "../../../../models/Comment";
// Request type is buidt in in next js but we use Next Request type

// POST
export async function POST(req: NextRequest) {
  return new Response("hello post");
}

// PUT
export async function PUT(req: NextRequest) {
  return new Response("hello from put");
}

// DELETE
export async function DELETE(req: Request) {
  const data2 = "heu";
  const data3 = "hi";
  const bata = await User.create({email : "232ksfasfslod@gmail.com",password: "hsfsfsafsjaksfsfa",username : "hekresfsafsfj"})
  const dataall = await User.find()
  



  return NextResponse.json({ data2,data3,bata ,dataall});
}

// GET
export async function GET(req: NextRequest) {
  // const data = await User.find({})
  // const data = await Comment.find({})
  // const data1 = await Product.find({})
  const data2 = await User.find({});
  // const data3 = await Product.find({});
  const data4 = await Comment.find({});
  return NextResponse.json({ data2,data4 });
}
