import { NextRequest } from "next/server";
import { connectToDb } from "../../../../lib/dataBase";
// Request type is buidt in in next js but we use Next Request type

// POST
export async function POST(req: NextRequest) {
  connectToDb()
  return new Response("hello post");
}

// PUT
export async function PUT(req: NextRequest) {
  return new Response("hello from put");
}

// DELETE
export async function DELETE(req: Request) {
  return new Response("hello from delete");
}

// GET
export async function GET(req: NextRequest) {
  connectToDb()

  return new Response("hello from get");
}
