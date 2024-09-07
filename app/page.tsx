"use client";

import { signIn, signOut } from "next-auth/react";

export default function Home() {
  return (
    <div className=" ">
      <div className="flex justify-between items-center p-4 border-b border-solid">
        <h1 className="text-3xl text-center">AppBar</h1>

        <div className="mt-4 flex gap-2">
          <button
            onClick={() => signIn()}
            className="px-2 py-1 border-solid border rounded-md hover:bg-white hover:text-black"
          >
            Sign in
          </button>
          <button
            onClick={() => signOut()}
            className="px-2 py-1 border-solid border rounded-md hover:bg-white hover:text-black"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
