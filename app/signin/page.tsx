"use client";

import Image from "next/image";

import googleLogo from "@/assets/icons/google.png";
import githubLogo from "@/assets/icons/github.png";

import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const session = useSession();

  if (session.status === "authenticated") {
    router.push("/");
  }

  return (
    <div className="flex justify-center items-center min-h-screen  text-white">
      <div className="w-full max-w-sm p-6 bg-gray-900 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-3 py-2 text-gray-50 bg-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1" htmlFor="password">
            Password
          </label>
          <input
            className="w-full px-3 py-2 text-gray-50 bg-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <button
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onClick={() => {
            signIn("credentials", { username: email, password });
          }}
        >
          Sign In
        </button>

        {/* Sign in with Google or GitHub */}
        <div className="mt-6 text-center">
          <p className="text-sm font-medium text-gray-400 mb-3">
            Or sign in with
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => signIn("google")}
              className="flex items-center justify-center w-full max-w-xs py-2 px-4 bg-white border border-gray-300 hover:bg-gray-100 transition-all duration-200 shadow-md rounded-lg focus:outline-none"
            >
              <Image
                src={googleLogo}
                alt="google logo"
                className="h-5 w-5 mr-3"
              />
              <span className="text-sm font-medium text-gray-700">
                Sign in with Google
              </span>
            </button>
            <button
              onClick={() => signIn("github")}
              className="flex items-center justify-center w-full max-w-xs py-2 px-4 bg-white border border-gray-300 hover:bg-gray-100 transition-all duration-200 shadow-md rounded-lg focus:outline-none"
            >
              <Image
                src={githubLogo}
                alt="github logo"
                className="h-5 w-5 mr-3"
              />
              <span className="text-sm font-medium text-gray-700">
                Sign in with Github
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
