"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { User } from "next-auth";
import { Button } from "./ui/button";

const NavBar = () => {
  const { data: session } = useSession();
  const user: User = session?.user as User;

  return (
    <nav className="p-4 shadow-lg text-white bg-black">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <a
          href="/"
          className="text-3xl font-bold mb-4 md:mb-0 hover:underline text-center md:text-left"
        >
          HealthQure+
        </a>

        {/* Navigation Links */}
        {session ? (
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            {/* Welcome Text */}
            <span className="bg-gray-700 text-white px-3 py-2 rounded-md hover:bg-gray-400 font-semibold text-center">
              Welcome {user?.fullname}
            </span>

            {/* Log Out Button */}
            <Button
              onClick={() => signOut()}
              className="font-bold bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-400"
            >
              Log Out
            </Button>

            {/* Dashboard Link */}
            <Link
              href="/dashboard"
              className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-400 font-semibold text-center"
            >
              Dashboard
            </Link>

            {/* Health Status Link */}
            <Link
              href="/get-health-details-from-user"
              className="font-bold bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-400 text-center"
            >
              Check Health-Status
            </Link>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            {/* Sign In Link */}
            <Link
              className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-400 font-bold text-center"
              href="/sign-in"
            >
              Sign In
            </Link>

            {/* Sign Up Link */}
            <Link
              href="/sign-up"
              className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-400 font-bold text-center"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;