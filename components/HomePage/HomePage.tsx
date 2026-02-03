import React from "react";
import HomeSlider from "../HomeSlider/HomeSlider";
import AuthenticSevas from "../AuthenticSevas/AuthenticSevas";

import SevasOffered from "../SevasOffered/SevasOffered";

const HomePage: React.FC = () => {
  return (
    <main>
      <HomeSlider />
      <AuthenticSevas />
      <SevasOffered />
    </main>
  );
};

export default HomePage;
