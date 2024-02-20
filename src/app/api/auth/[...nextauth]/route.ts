import connectDB from "@/lib/dataBase";
import nextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { User } from "../../../../../models/User";
import { toast } from "react-toastify";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider == "google") {
        const { email, name } = user;
        try {
          const res = await fetch("http://localhost:3000/auth/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          });
          return user;
        } catch (error) {
          toast.error(error.response.data.message);
          console.log(error.response.data.message);
        }
      }
    },
  },
};

const handler = nextAuth(authOptions);
export { handler as GET, handler as POST };

//   export default NextAuth(authOptions)
