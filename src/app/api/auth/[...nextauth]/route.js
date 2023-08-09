import NextAuth from 'next-auth';

import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import connect from '../../../../utils/db';
import User from '../../../../models/User';
import bcrypt from 'bcryptjs';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    }),
    CredentialsProvider({
      id: 'creds',
      name: 'creds',
      async authorize(userCreds) {
        await connect();
        try {
          const user = await User.findOne({ email: userCreds.email });
          if (user) {
            // check pass
            const passMatch = await bcrypt.compare(
              userCreds.password,
              user.password
            );
            if (passMatch) {
              return user;
            } else {
              throw new Error('Wrong credentials');
            }
          } else {
            throw new Error('User not found');
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
  ],
  pages: {
    error: '/dashboard/login',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
