import api from '@/src/auth/infra/HttpClient';
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials) {
        try {
          console.log(credentials, 'a')
          const res = await api().post("/api/usuario/v1/login", credentials);
          if (res.data) {
            console.log(res.data)
            return res.data;
          }
        } catch (e) {
          return e
        }
      },
    }),
  ],
  callbacks: {
    // async jwt({ token, user }) {
    //   if (token.access_token) {
    //     let decoded = await jwt(String(token.access_token));
    //     if ((decoded as any).exp * 1000 > Date.now()) {
    //       return { ...token, ...user };
    //     } else {
    //       const refreshToken = token?.refresh_token;
    //       const response = await api().post(
    //         "/refreshToken",
    //         {},
    //         { headers: { Authorization: `Bearer ${refreshToken}` } }
    //       );
    //       const tokens: TokenSet = await response.data;
    //       return {
    //         access_token: tokens.access_token,
    //         refresh_token: tokens.refresh_token ?? token.refresh_token,
    //       };
    //     }
    //   }
    //   return { ...token, ...user };
    // },
    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    },
  },
  secret: "*G$b6bsdfw679GH¨79%"
};
export default NextAuth(authOptions);
