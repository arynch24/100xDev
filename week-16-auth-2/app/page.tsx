"use client";
import { signIn,signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSession } from "next-auth/react";

export default function SignInPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const session = useSession();

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center ">
      <input type='text' placeholder="Username" className="text-white p-2 bg-black border-2 border-gray-200" value={username} onChange={(e) => {
        setUsername(e.target.value)
      }} />
      <br />
      <input type='password' placeholder="Password" className="text-white p-2 bg-black border-2 border-gray-200" value={password} onChange={(e) => {
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

      <br />

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

      {session && <div>

        Hello Signed Up with google
        <p>Username :{JSON.stringify(session.data?.user?.name)}</p>
        <p>Username :{JSON.stringify(session.data?.user?.email)}</p>
        <button
        onClick={async () => {
          await signOut();
        }}
        className="text-red-500 border-red-500 border-2 p-2"
      >
        Logout
      </button>
        
      </div>}


    </div>
  );
}