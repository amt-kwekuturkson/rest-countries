import { useState} from "react";

export const useOption = () => {
  const [dropdown, setDropdown] = useState("none");


  function onToggleDropDown() {
    setDropdown(dropdown === "none" ? "block" : "none");
  }

  const isDisplayed = dropdown === "block";

  return { isDisplayed, onToggleDropDown };
};
