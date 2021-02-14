import { AnimateSharedLayout } from "framer-motion";
import React from "react";
import { Header } from "./Components/Header";
import { Routes } from "./routes";

function App() {
  return (
    <div className=" bg-very-light-gray dark:bg-very-dark-blue min-h-screen text-very-dark-blue dark:text-light-white">
      <Header />
      <AnimateSharedLayout>
        <Routes />
      </AnimateSharedLayout>
    </div>
  );
}

export default App;
