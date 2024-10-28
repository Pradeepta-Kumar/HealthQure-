import {NextAuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/User";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
          id: "credentials",
          name: "Credentials",
          credentials: {
            email: { label: "Email", type: "email" },
            password: { label: "Password", type: "password" }
          },
          
          async authorize(credentials: any): Promise<any> {
            await dbConnect();
            try {
                const user = await UserModel.findOne({ email: credentials.email });
                if(!user?.isVerified) {
                    throw new Error("The entered credentails are WRONG!!!");
                }
                if(!user) throw new Error("User not found!");
                const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
                if(isPasswordCorrect) return user;
                else throw new Error("The credentials you've entered is not right");
            } catch( err ) {
                console.error(err);
                throw new Error("Error signing in the user, Please try again...!!!");
            }
          }
        })
    ],
    callbacks: {
        async jwt({token, user}) {
            if(user) {
                token._id = user._id?.toString();
                token.isVerified = user.isVerified;
                token.fullname = user.fullname;
                token.email = user.email;
            }
            return token;
        },
        async session({session, token}) {
            if(token) {
                session.user._id = token._id;
                session.user.isVerified = token.isVerified;
                session.user.fullname = token.fullname;
                session.user.email = token.email;
            }
            return session;
        },
    },
    pages: {
        signIn: "/sign-in",
    },
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET
}