import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

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

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "The Shade of Blue",
    value: "blue",
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <button onClick={() => setShowDropdown(!showDropdown)}>
        click toogle
      </button>
      {showDropdown && (
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      )}
    </div>
  );
};
