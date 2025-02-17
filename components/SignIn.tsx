import { signIn } from "@/auth";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const SignIn = async () => {
  // const session = await auth();
  // console.log(session);

  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button
        className="border px-5 py-2 rounded flex items-center mt-5"
        type="submit"
      >
        <span className="mr-2">
          <FcGoogle />
        </span>
        Signin with Google
      </button>
    </form>
  );
};

export default SignIn;
