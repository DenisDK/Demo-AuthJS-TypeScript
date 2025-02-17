import { auth } from "@/auth";
import { SignIn, SignOut, UserInfo } from "@/components";

export default async function Home() {
  const session = await auth();
  const user = session?.user;

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <UserInfo user={user} />
      {user ? <SignOut /> : <SignIn />}
    </main>
  );
}
