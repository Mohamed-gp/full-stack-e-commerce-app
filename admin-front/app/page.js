import { getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";


export default async function Home() {
  const session = await getServerSession({
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
    ],
  });
  return (
    <div>
      <p>{session ? "you are login" : "you are not login"}</p>
    </div>
  );
}
