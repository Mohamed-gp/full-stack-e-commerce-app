export async function POST(req: any) {
  const { method } = req;
  return new Response(method);
}
