import { NextRequest, NextResponse } from "next/server";
import { connectToDb } from "../../../../lib/dataBase";
import { User, verifyRegister } from "../../../../models/User";

export async function POST(req: NextRequest) {
  connectToDb();
  const body = await req.json()
  const { error } = verifyRegister(body);

  // If there's an error in validation, log it and return an error response
  if (error) {
      console.error('Validation error:', error.details);
      return NextResponse.json({ error: 'Validation error' }, { status: 400 });
  }

  return NextResponse.json("bata",{status : 201})
}
// export async function GET(req: NextRequest) {
//   connectToDb();
//   // const body = await req.json();
//   // const { error } = verifyRegister(body);
//   // if (error) {
//   //   return new Response(error.details[0].message, { status: 400 });
//   // }
//   // const user = User.findOne({ email: body.email });
//   // if (user) {
//   //   return new Response("User Already Exist ",{status : 400});
//   // }
//   return new Response("helo world");
// }
