import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
  {
    title: "What is React?",
    content: "React is a frontend javascript framework",
  },
  {
    title: "Why use React",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How to use React",
    content: "There's a boilerplate built by Facebook",
  },
];

export default () => {
  return (
    <div>
      <Search />
    </div>
  );
};
