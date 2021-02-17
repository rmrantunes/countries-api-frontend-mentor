import React from "react";
import { CountriesDataStore } from "../../../contexts/CountriesData";
import { changePageTitle } from "../../../utils/changePageTitle";
import { Container } from "../../Container";
import { FlagsGrid } from "./FlagsGrid";
import { SearchAndFilterBar } from "./SearchAndFilterBar";

export const Home = () => {
  changePageTitle("Home | Countries Info")
  return (
    <CountriesDataStore>
      <main className="py-10">
        <Container>
          <SearchAndFilterBar />
          <FlagsGrid />
        </Container>
      </main>
    </CountriesDataStore>
  );
};
