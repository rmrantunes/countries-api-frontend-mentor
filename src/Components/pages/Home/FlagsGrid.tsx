import axios from "axios";
import React, { useContext, useEffect } from "react";
import { CountriesDataContext } from "../../../Contexts/CountriesData";
import { API_ENDPOINTS, API_URL } from "../../../utils/api-definitions";
import { FlagCard } from "./FlagCard";

export const FlagsGrid = () => {
  const {
    setCountriesData,
    countriesDataToDisplay,
    setCountriesDataToDisplay,
  } = useContext(CountriesDataContext);

  useEffect(() => {
    const getCountriesData = async () => {
      try {
        const { data } = await axios.get(API_URL + API_ENDPOINTS.ALL);
        setCountriesData?.(data);
        setCountriesDataToDisplay?.(data);
      } catch (error) {
        setCountriesData?.(error);
      }
    };

    getCountriesData();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-16 py-10">
      {countriesDataToDisplay?.map(
        ({ flag, name, region, population, capital }) => (
          <FlagCard
            flag={flag}
            name={name}
            population={population}
            capital={capital}
            region={region}
            key={flag}
          />
        )
      )}
    </div>
  );
};
