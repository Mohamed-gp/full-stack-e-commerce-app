import { NextRequest } from "next/server";
import { connectToDb } from "../../../../lib/dataBase";
import { User, verifyRegister } from "../../../../models/User";

export async function POST(req: NextRequest) {
  connectToDb();
  const body = await req.json();
  const { error } = verifyRegister(body)
  if (error) {
    console.log("hello  ")
  }
  // const { error } = verifyRegister(body);
  // if (error) {
  //   return new Response(error.details[0].message, { status: 400 });
  // }
  // const user = User.findOne({ email: body.email });
  // if (user) {
  //   return new Response("User Already Exist ",{status : 400});
  // }
  return new Response("bata");
}
export async function GET(req: NextRequest) {
  connectToDb();
  // const body = await req.json();
  // const { error } = verifyRegister(body);
  // if (error) {
  //   return new Response(error.details[0].message, { status: 400 });
  // }
  // const user = User.findOne({ email: body.email });
  // if (user) {
  //   return new Response("User Already Exist ",{status : 400});
  // }
  return new Response("helo world");
}
