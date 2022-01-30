import { signOut, useSession } from "next-auth/react";
import React from "react";

const MiniProfile = () => {
  const { data: session } = useSession();
  return (
    <div className="mt-14 flex items-center justify-between ml-10">
      <img
        className="rounded-full w-16 h-16 p-[2px] border object-contain"
        src={session?.user?.image}
        alt=""
      />
      <div className="flex-1 mx-4">
        <p className="font-bold">{session?.user?.username}</p>
        <h3 className="text-sm text-gray-400">Welcome to instagram</h3>
      </div>
      <button onClick={signOut} className="text-blue-400 text-sm font-semibold">
        Sign Out
      </button>
    </div>
  );
};

export default MiniProfile;
