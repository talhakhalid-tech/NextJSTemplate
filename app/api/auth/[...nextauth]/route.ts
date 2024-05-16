import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse
} from 'next';
import type { NextAuthOptions } from 'next-auth';
import { getServerSession } from 'next-auth';

// Configuration options for NextAuth.
export const config = {
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET ?? ''
    })
  ]
} satisfies NextAuthOptions;

/**
 * Authenticates user session (get user session).
 * @param args - Optional arguments: request and response objects.
 * @returns {Promise<any>} The user session.
 */
export function auth(
  ...args:
    | [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, config);
}

// NextAuth handler.
const handler = NextAuth(config);

// Exporting NextAuth handler for GET and POST methods.
export { handler as GET, handler as POST };
