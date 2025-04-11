import type { NextAuthConfig } from "next-auth";
import GitHub from "next-auth/providers/github";
const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = process.env;

export default {
  providers: [
    GitHub({
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
    }),
  ],
} satisfies NextAuthConfig;
