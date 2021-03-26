import React from "react";
import { Hero } from "../components/index";
import { TopBar } from "../components/index";
import { Subsection } from "../components/Content/Subsection/Subsection";

const HomePage = () => {
  return (
    <div>
      <TopBar />
      <Hero />
    </div>
  );
};

export default HomePage;
