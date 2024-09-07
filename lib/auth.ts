import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const NEXT_AUTH_CONFIG: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Enter username",
          required: true,
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter password",
          required: true,
        },
      },
      async authorize(credentials) {
        console.log("crendentials", credentials);

        // validate user credentials
        if (
          credentials?.username !== "varindersingh6885@gmail.com" ||
          credentials?.password !== "123456"
        ) {
          return null;
        }

        // if credentials are valid
        return {
          id: "user1",
          email: "varindersingh6885@gmail.com",
          name: "Varinder Singh",
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    session: ({ session, token }) => {
      if (session.user) {
        return { ...session, id: token.sub };
      }
      return session;
    },
  },
};
