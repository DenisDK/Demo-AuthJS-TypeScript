// import { auth } from "@/auth";
import { UserInfoProps } from "@/types";
import Image from "next/image";
import React from "react";

const UserInfo = async ({ user }: UserInfoProps) => {
  //   const session = await auth();
  //   console.log(session);
  //   const user = session?.user;

  return (
    <div className="flex">
      <Image
        className="rounded-full"
        width={60}
        height={60}
        src={user?.image || "/no-avatar.jpg"}
        alt="User Img"
      />
      <div className="ml-3">
        <div className="text-2xl">{user?.name || "UserName"}</div>
        <div className="text-xl">{user?.email || "UserEmail"}</div>
      </div>
    </div>
  );
};

export default UserInfo;
