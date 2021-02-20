import React, { useContext, useEffect } from "react";
import { CountriesDataContext } from "../../../Contexts/CountriesData";
import { api } from "../../../utils/api";
import { API_ENDPOINTS } from "../../../utils/api-definitions";
import { FlagCard } from "./FlagCard";

export const FlagsGrid = () => {
  const {
    setCountriesData,
    countriesDataToDisplay,
    setCountriesDataToDisplay,
  } = useContext(CountriesDataContext);

  useEffect(() => {
    async function getCountriesData() {
      try {
        const { data } = await api.get(API_ENDPOINTS.ALL);
        setCountriesData?.(data);
        setCountriesDataToDisplay?.(data);
      } catch (error) {
        setCountriesData?.(error);
      }
    }

    getCountriesData();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-16 py-10">
      {countriesDataToDisplay?.map(
        ({ flag, name, region, population, capital, alpha3Code }) => (
          <FlagCard
            {...{ flag, name, region, population, capital, alpha3Code }}
            key={flag}
          />
        )
      )}
    </div>
  );
};
