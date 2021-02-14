import React from "react";
import { Filter } from "./Filter";
import { SearchForm } from "./SearchForm";

export const SearchAndFilterBar = () => {
  return (
    <div className="flex flex-col md:flex-row  space-y-4 md:space-x-0 md:items-center justify-between">
      <SearchForm />
      <Filter />
    </div>
  );
};
