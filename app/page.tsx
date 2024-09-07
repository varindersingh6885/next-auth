"use client";

import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();
  const isSessionLoading = session.status === "loading";
  const isUserLoginRequired = !session.data;
  console.log("session", session);
  return (
    <div className="h-screen flex flex-col">
      <div className="flex justify-between items-center p-4 border-b border-solid">
        <h1 className="text-3xl text-center">AppBar</h1>

        {!isSessionLoading && (
          <div className="mt-4 flex gap-2">
            {isUserLoginRequired ? (
              <button
                onClick={() => signIn()}
                className="px-2 py-1 border-solid border rounded-md hover:bg-white hover:text-black"
              >
                Sign in
              </button>
            ) : (
              <button
                onClick={() => signOut()}
                className="px-2 py-1 border-solid border rounded-md hover:bg-white hover:text-black"
              >
                Logout
              </button>
            )}
          </div>
        )}
      </div>
      <div className="flex-1 flex justify-center items-center">
        {!isSessionLoading && (
          <div>
            {isUserLoginRequired
              ? "Please Sign in."
              : `Welcome, ${session.data.user?.name}`}
          </div>
        )}
      </div>
    </div>
  );
}
