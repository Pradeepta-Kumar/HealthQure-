"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import {User} from "next-auth";
import { Button } from "./ui/button";

const NavBar = () => {
  const { data: session } = useSession();
  const user: User = session?.user as User;
  console.log(user);
  return (
    <nav className="p-2 md:p-4 shadow:lg text-white bg-black">
      <div className="container mx-auto flex flex-col md:flex-row justify-between item-center px-16">
        <a href="/" className="text-3xl font-bold mb-4 md:mb-0 hover:underline">HealthQure+</a>
        {session ? (
          <div className="justify-between">
            <span className="bg-gray-700 text-white px-3 py-2 hover:bg-gray-400 hover:underline font-semibold mr-2">Welcome {user?.fullname}</span>
            <Button onClick={() => signOut()} className="w-full md:w-auto font-bold bg-gray-700 text-white px-3 py-2 hover:bg-gray-400 hover:underline mr-2">Log-Out</Button>
            <Link href="/dashboard" className="bg-gray-700 text-white px-3 py-2 hover:bg-gray-400 hover:underline font-semibold mr-2">Dashboard</Link>
            <Link href="/get-health-details-from-user" className="font-bold bg-gray-700 text-white px-3 py-2 hover:bg-gray-400 hover:underline">Check Health-Status</Link>
          </div>
        ) : (
          <>
            <div className="justify-around text-lg font-bold">
            <Link className="mr-4 bg-gray-700 text-white px-3 py-2 hover:bg-gray-400 hover:text-black hover:underline" href="/sign-in">Sign in</Link>
            <Link href="/sign-up" className="bg-gray-700 text-white px-3 py-2 hover:bg-gray-400 hover:text-black hover:underline">Sign up</Link>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};
export default NavBar;
