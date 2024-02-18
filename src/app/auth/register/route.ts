import { NextRequest, NextResponse } from "next/server";
import { User, verifyRegister } from "../../../../models/User";
import { user } from "../../../../types/interfaces";
import jwt from "jsonwebtoken"

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log(body);
  const { error } = verifyRegister(body);
  if (error) {
    return NextResponse.json({ message: error.details[0].message });
  }
  const oldUser: user | null = await User.findOne({ email: body.email });
  if (oldUser) {
    return NextResponse.json({ message: "User Alredy Exist" });
  }
  const newUser = await User.create({
    ...body
  })

  

  return NextResponse.json("bata", { status: 201 });
}
