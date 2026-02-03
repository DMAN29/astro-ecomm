import React from "react";
import HomeSlider from "../HomeSlider/HomeSlider";
import AuthenticSevas from "../AuthenticSevas/AuthenticSevas";

import SevasOffered from "../SevasOffered/SevasOffered";
import DivineJapas from "../DivineJapas/DivineJapas";

const HomePage: React.FC = () => {
  return (
    <main>
      <HomeSlider />
      <AuthenticSevas />
      <SevasOffered />
      <DivineJapas />
    </main>
  );
};

export default HomePage;
