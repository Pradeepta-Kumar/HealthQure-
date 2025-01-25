import "next-auth";
declare module "next-auth" {
  interface User {
    _id?: string;
    isVerified?: boolean;
    fullname?: string;
    email?: string;
  }
  interface Session {
    user: {
      _id?: string;
      isVerified?: boolean;
      fullname?: string;
      email?: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth" {
  interface JWT {
    _id?: string;
    isVerified?: boolean;
    fullname?: string;
    email?: string;
  }
}
