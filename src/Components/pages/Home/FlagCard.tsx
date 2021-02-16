import React from "react";
import { Link } from "react-router-dom";
import { IApiResponseData } from "../../../utils/api-definitions";
import { ThemeChangeWrapper } from "../../ThemeChangeWrapper";
import { motion } from "framer-motion";

export interface IFlagCardProps extends IApiResponseData {}

export const FlagCard: React.FC<IFlagCardProps> = ({
  flag,
  name,
  population,
  alpha3Code,
  region,
  capital,
}) => {
  return (
    <Link to={`/${alpha3Code}`}>
      <ThemeChangeWrapper
        rounded
        className="grid grid-rows-2 max-h-96 shadow-md hover:shadow-lg transform hover:-translate-y-3.5 transition duration-500 cursor-pointer overflow-hidden"
      >
        <div
          className="bg-center bg-cover"
          // style={{
          //   backgroundImage: `url("${flag}")`,
          // }}
        >
          <motion.img
            src={flag}
            alt={name}
            className="block w-full object-cover h-full"
            layoutId={flag}
          />
        </div>
        <div className="p-5 space-y-4">
          <h4 className="text-base font-bold">{name}</h4>
          <ul className="text-sm font-bold space-y-px">
            <li>
              Population: <span className="font-normal">{population}</span>
            </li>
            <li>
              Region: <span className="font-normal">{region}</span>
            </li>
            <li>
              Capital: <span className="font-normal">{capital}</span>
            </li>
          </ul>
        </div>
      </ThemeChangeWrapper>
    </Link>
  );
};
