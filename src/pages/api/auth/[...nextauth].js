// import { loginUser } from "@/modules/fetch";
// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";

// export default NextAuth({
//   session: {
//     strategy: "jwt",
//   },
//   callbacks: {
//     async jwt({ token, user }) {
//       // if (user?.id) {
//       //   token.id = user.id;
//       // }
//       return { ...token, ...user };
//     },
//     async session({ session, token, user }) {
//       // if (token?.id) {
//       //   session.user.id = token.id;
//       // }
//       session.user = token;
//       return session;
//     },
//   },
//   providers: [
//     CredentialsProvider({
//       async authorize(credentials) {
//         const user = await loginUser(credentials.email, credentials.password);
//         if (!user) {
//           throw new Error("Invalid Credentials.");
//         }
//         return user;
//       },
//     }),
//   ],
// });
