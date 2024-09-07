// Server side component for showing user details
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const getUser = async () => {
  const session = await getServerSession();
  return session;
};

export default async function User() {
  const session = await getUser();

  // navigate to home if user is not authenticated
  if (!session) {
    redirect("/");
    return;
  }

  console.log("server side component > session", session);
  return (
    <div>
      <div className="flex-1 flex flex-col gap-4 justify-center items-center p-12">
        <h1 className="text-xl">Server side component</h1>
        <div>{`Welcome, ${session?.user?.name}`}</div>
      </div>
    </div>
  );
}
