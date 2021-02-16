export enum API_ENDPOINTS {
  ALL = "/all",
  BASE = "https://restcountries.eu/rest/v2",
  NAME = "/name",
  CODE = "/alpha",
}

export interface IApiResponseData {
  flag: string;
  name: string;
  alpha3Code?: string;
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
