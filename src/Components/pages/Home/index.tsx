import React from "react";
import { CountriesDataStore } from "../../../Contexts/CountriesData";
import { Container } from "../../Container";
import { FlagsGrid } from "./FlagsGrid";
import { SearchAndFilterBar } from "./SearchAndFilterBar";

export const Home = () => {
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
