import React, { useContext } from "react";
import { CountriesDataContext } from "../../../contexts/CountriesData";
import { ThemeChangeWrapper } from "../../ThemeChangeWrapper";

const apiRegions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

export const FilterDropdown = () => {
  const { setCountriesDataToDisplay, countriesData } = useContext(
    CountriesDataContext
  );

  const handleCountriesByRegion = (regionName: string) => {
    setCountriesDataToDisplay?.(() =>
      countriesData?.filter(({ region }) => region.includes(regionName))
    );
  };

  return (
    <ThemeChangeWrapper
      rounded
      className="absolute left-0 -bottom-56 w-full shadow-md z-10"
    >
      <div className=" px-6 py-4 space-y-2">
        <button
          className="w-full text-left hover:bg-dark-blue-2"
          onClick={() => setCountriesDataToDisplay?.(countriesData)}
        >
          All
        </button>
        {apiRegions.map((region) => (
          <button
            className="w-full text-left hover:bg-dark-blue-2"
            onClick={() => handleCountriesByRegion(region)}
          >
            {region}
          </button>
        ))}
      </div>
    </ThemeChangeWrapper>
  );
};
