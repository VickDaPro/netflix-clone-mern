import { signOut, getSession } from "next-auth/react";
import { NextPageContext } from "next";

import useCurrentUser from "@/hooks/useCurrentUser";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home() {
  const { data: user } = useCurrentUser();

  return (
    <>
      <h1>Netflix Clone</h1>
      <p className="text-4xl text-white font-bold">
        Loggin in as :{user?.name}
      </p>
      <button onClick={() => signOut()} className="h-10 bg-white w-full">
        Logout!
      </button>
    </>
  );
}
