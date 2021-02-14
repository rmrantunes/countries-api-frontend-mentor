import { createContext, useState } from "react";
import { IApiResponseData } from "../utils/api-definitions";

export interface ICountriesDataProviderValue {
  countriesData: IApiResponseData[];
  setCountriesData: React.Dispatch<
    React.SetStateAction<IApiResponseData[] | undefined>
  >;
  countriesDataToDisplay: IApiResponseData[];
  setCountriesDataToDisplay: React.Dispatch<
    React.SetStateAction<IApiResponseData[] | undefined>
  >;
}

export const CountriesDataContext = createContext<
  Partial<ICountriesDataProviderValue>
>({});

export const CountriesDataStore: React.FC = ({ children }) => {
  const [countriesData, setCountriesData] = useState<IApiResponseData[]>();
  const [countriesDataToDisplay, setCountriesDataToDisplay] = useState<
    IApiResponseData[]
  >();
  return (
    <CountriesDataContext.Provider
      value={{
        countriesData,
        setCountriesData,
        countriesDataToDisplay,
        setCountriesDataToDisplay,
      }}
    >
      {children}
    </CountriesDataContext.Provider>
  );
};
