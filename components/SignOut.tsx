import { signOut } from "@/auth";
import React from "react";
import { GoSignOut } from "react-icons/go";

const SignOut = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button className="border px-5 py-2 rounded flex items-center mt-5">
        <span className="mr-3">
          <GoSignOut />
        </span>
        SignOut
      </button>
    </form>
  );
};

export default SignOut;
