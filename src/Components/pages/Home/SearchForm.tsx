import React, { useContext, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { ThemeChangeWrapper } from "../../ThemeChangeWrapper";
import { twTransition500, twRing } from "../../../utils/theme-tw-classes";
import { CountriesDataContext } from "../../../Contexts/CountriesData";

export const SearchForm = () => {
  const [text, setText] = useState("");
  const { countriesData, setCountriesDataToDisplay } = useContext(
    CountriesDataContext
  );

  const handleSearch = (event: any) => {
    setText(event.target.value);
    if (!text) return setCountriesDataToDisplay?.(countriesData);
    setCountriesDataToDisplay?.(() =>
      countriesData?.filter(({ name }) =>
        name.toLocaleLowerCase().includes(text.toLocaleLowerCase())
      )
    );
  };

  return (
    <form
      className={`rounded-lg w-full md:w-96 shadow-md ${twRing()} ${twTransition500()}`}
      onSubmit={(event: any) => event.preventDefault()}
    >
      <ThemeChangeWrapper rounded>
        <div className="flex px-6 space-x-6 items-center">
          <FiSearch size={18} />
          <div className="flex-1">
            <input
              className="bg-transparent py-4 focus:outline-none tracking-wider w-full"
              type="text"
              placeholder="Search a country"
              value={text}
              onChange={handleSearch}
            />
          </div>
        </div>
      </ThemeChangeWrapper>
    </form>
  );
};
