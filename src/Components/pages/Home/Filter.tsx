import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { twRing, twTransition500 } from "../../../utils/theme-tw-classes";
import { ThemeChangeWrapper } from "../../ThemeChangeWrapper";
import { FilterDropdown } from "./FilterDropdown";

export const Filter = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div
      className={`rounded-lg shadow-md relative w-max ${twRing("")} ${twTransition500()}`}
      role="button"
    >
      <ThemeChangeWrapper rounded>
        <div
          className="px-6 py-4 flex space-x-4 items-center"
          onClick={() => setIsDropdownOpen((current) => !current)}
        >
          <span>Filter By Region</span>
          <FiChevronDown
            className={`transform ${twTransition500()} ${
              isDropdownOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
      </ThemeChangeWrapper>
      {isDropdownOpen && <FilterDropdown />}
    </div>
  );
};
