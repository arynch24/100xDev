"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignInPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center ">
      <input type='text' placeholder="Username"  className="text-white p-2 bg-black border-2 border-gray-200" value={username} onChange={(e) => {
        setUsername(e.target.value)
      }} />
      <br />
      <input type='password' placeholder="Password"  className="text-white p-2 bg-black border-2 border-gray-200" value={password} onChange={(e) => {
        setPassword(e.target.value)
      }} />
      <br />
      <button
        onClick={async () => {
          const res = await signIn("credentials", {
            username: username,
            password: password,
            redirect: false,
          });
          console.log(res);
          router.push("/");
        }}

        className="border-2 border-gray-200 px-4 py-2"
      >
        Login with Email
      </button>

<br/>

      <button
        onClick={async () => {
          await signIn("google");
        }}
      >
        Login with Google
      </button>

      <br />
      <button
        onClick={async () => {
          await signIn("github");
        }}
      >
        Login with GitHub
      </button>
      <br />

      
    </div>
  );
}