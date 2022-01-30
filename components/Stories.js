import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Story from "./Story";
// import { Faker } from "react-fakers";
const { faker } = require("@faker-js/faker");
const Stories = () => {
  const [suggestions, setSuggestions] = useState([]);
  const { data: session } = useSession();
  useEffect(() => {
    const suggestion = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestions(suggestion);
  }, []);
  console.log(suggestions);
  return (
    <div className="flex space-x-2 p-6 bg-white border-gray-300 border rounded-sm overflow-x-scroll mt-8 scrollbar-thin scrollbar-thumb-black">
      {session && (
        <Story img={session?.user?.image} username={session?.user?.username} />
      )}
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
};

export default Stories;
