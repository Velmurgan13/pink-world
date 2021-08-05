import React from "react";
import Hero from "./Hero";
import Header from "./Header";
import Footer from "./Footer";
import International from "./FeatureOne";
import Domestic from "./FeatureTwo";
import FAQ from "./FAQ";

function Homepage() {
  return (
    <div>
      <Header />
      <Hero />
      <International />
      <Domestic />
      <FAQ />
      <Footer />
    </div>
  );
}

export default Homepage;
