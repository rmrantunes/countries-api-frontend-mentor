import React, { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useHistory, useParams } from "react-router-dom";
import { IAppRoutesParams } from "../../../routes";
import { api } from "../../../utils/api";
import {
  API_ENDPOINTS,
  IApiResponseData,
} from "../../../utils/api-definitions";
import { Container } from "../../Container";
import { ThemeChangeWrapper } from "../../ThemeChangeWrapper";

export interface ICountryProps extends IApiResponseData {}

export const Country: React.FC<ICountryProps> = () => {
  const [country, setCountry] = useState<IApiResponseData>();
  const { countryCode } = useParams<IAppRoutesParams>();
  const history = useHistory();

  useEffect(() => {
    async function getCountry() {
      const { data } = await api.get(`${API_ENDPOINTS.CODE}/${countryCode}`);
      console.log(data);
      setCountry(data);
    }

    getCountry();
  }, [countryCode]);

  return (
    <section>
      <Container>
        <div className="py-16 space-y-16">
          <nav>
            <button
              type="button"
              onClick={history.goBack}
              className="rounded-lg shadow-lg transform transition duration-500 hover:-translate-y-1"
              title="Go back"
            >
              <ThemeChangeWrapper
                rounded
                className="flex items-center space-x-2 py-2 px-6"
              >
                <FiArrowLeft />
                <span>Back</span>
              </ThemeChangeWrapper>
            </button>
          </nav>
          <article className="flex flex-col lg:flex-row gap-8 lg:gap-20 lg:items-center">
            <div className="bg-light-white dark:bg-dark-blue-2 rounded-lg p-2 flex-1">
              <div
                className="h-96 bg-cover bg-center"
                // style={{ backgroundImage: `url("${country?.flag}")` }}
              >
                {country?.flag ? (
                  <img
                    src={country?.flag}
                    alt={country?.name}
                    className="block w-full h-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full animate-pulse bg-gray-800 opacity-10">
                    {country?.flag}
                  </div>
                )}
              </div>
            </div>
            <div className="flex-1 pl-2 md:pl-12 md:pt-10 space-y-8 font-bold">
              <h1 className="text-4xl font-bold">{country?.name}</h1>
              <ul className="font-bold space-y-px flex flex-col md:flex-row gap-8 md:gap-16">
                <div className="space-y-2">
                  <li>
                    Native name:{" "}
                    <span className="font-semibold">{country?.nativeName}</span>
                  </li>
                  <li>
                    Population:{" "}
                    <span className="font-semibold">{country?.population}</span>
                  </li>
                  <li>
                    Region:{" "}
                    <span className="font-semibold">{country?.region}</span>
                  </li>
                  <li>
                    Capital:{" "}
                    <span className="font-semibold">{country?.capital}</span>
                  </li>
                </div>
                <div className="space-y-2">
                  <li>
                    Top Level Domain:{" "}
                    <span className="font-semibold">
                      {country?.topLevelDomain}
                    </span>
                  </li>
                  <li>
                    Currencies:{" "}
                    <span className="font-semibold">
                      {country?.currencies?.map(({ code }) => code).join(", ")}
                    </span>
                  </li>
                  <li>
                    Languages:{" "}
                    <span className="font-semibold">
                      {country?.languages?.map(({ name }) => name).join(", ")}
                    </span>
                  </li>
                </div>
              </ul>
              <div className="space-y-2 max-w-screen-sm">
                <span>Border Countries: </span>
                <div className="grid grid-cols-6 gap-2">
                  {country &&
                    country?.borders?.map((nearCountry) => (
                      <Link
                        key={nearCountry}
                        to={`/${nearCountry}`}
                        className="py-2 px-4 bg-light-white dark:bg-dark-blue-2 font-semibold text-center shadow-md rounded-lg transform hover:-translate-y-1.5 transition duration-500 cursor-pointer"
                      >
                        {nearCountry}
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
};
