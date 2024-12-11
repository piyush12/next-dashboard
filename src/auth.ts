import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  callbacks: {
    async jwt({ token, account, profile }) {
      // Persist the OAuth access_token and/or the user id to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
        token.id = profile?.id || null;
      }
      return token;
    },
    async session({ session, token }) {
      // Attach additional fields to the session object
      session.user.id = (token.id as string) || "";
      return session;
    },
  },
});
