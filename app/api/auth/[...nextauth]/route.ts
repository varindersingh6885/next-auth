import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
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
          username: "varindersingh6885@gmail.com",
          name: "Varinder Singh",
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
