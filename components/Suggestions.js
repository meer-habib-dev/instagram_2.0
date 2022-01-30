import faker from "@faker-js/faker";
import React, { useEffect, useState } from "react";

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestion = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestions(suggestion);
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h1 className="text-sm font-bold text-gray-400">Suggestions for you</h1>
        <button className=" text-gray-600 font-semibold">See All</button>
      </div>
      {suggestions.map((profile) => (
        <div
          key={profile.id}
          className="flex justify-between items-center mt-3"
        >
          <img
            className="rounded-full h-10 w-10 border p-[2px]"
            src={profile.avatar}
            alt=""
          />
          <div className="flex-1 ml-4">
            <h1 className="font-semibold text-sm">{profile.username}</h1>
            <h2 className="text-xs text-gray-400">
              Work at {profile.company.name}
            </h2>
          </div>
          <button className="text-xs text-blue-400 font-bold">Follow</button>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
