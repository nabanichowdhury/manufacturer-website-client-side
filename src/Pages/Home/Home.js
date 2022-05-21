import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import Tools from "./Tools";

const Home = () => {
  return (
    <div className="px-12">
      <Banner></Banner>
      <Tools></Tools>
      <Footer></Footer>
    </div>
  );
};

export default Home;
