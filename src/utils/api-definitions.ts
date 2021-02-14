export const API_URL = "https://restcountries.eu/rest/v2";
export enum API_ENDPOINTS {
  ALL = "/all",
  NAME = "/name",
}

export interface IApiResponseData {
  flag: string;
  name: string;
  population: string;
  capital: string;
  region: string;
  subregion?: string;
  nativeName?: string;
  topLevelDomain?: string;
  borders?: string[];
  currencies?: Array<{
    code: string;
  }>;
  languages?: Array<{
    name: string;
  }>;
}
