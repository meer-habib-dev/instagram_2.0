import React, { useEffect } from "react";
// import { Faker } from "react-fakers";
const { faker } = require("@faker-js/faker");
const Stories = () => {
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    console.log(suggestions);
  }, []);
  return <div></div>;
};

export default Stories;
