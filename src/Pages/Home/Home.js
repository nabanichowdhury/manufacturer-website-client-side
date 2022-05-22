import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import BusinessSummery from "./BusinessSummery";
import ContactUs from "./ContactUs";
import OurWorkers from "./OurWorkers";
import Reviews from "./Reviews";
import Tools from "./Tools";

const Home = () => {
  return (
    <div className="px-12">
      <Banner></Banner>
      <Tools></Tools>
      <BusinessSummery></BusinessSummery>
      <Reviews></Reviews>
      <OurWorkers></OurWorkers>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
