import React from "react";
import Advertise from "../Advertise";
import Category from "./Category";
import ClientSay from "./ClientSay";
import Counter from "./Counter";
import Hero from "./Hero";
import WorksDoc from "./WorksDoc";

const Home = () => {
  return (
    <div>
      <Hero />
      {/* <Banner /> */}
      <WorksDoc />
      <Category />
      {/* <Advertisements/> */}
      <Advertise />
      <Counter />
      <ClientSay />
    </div>
  );
};

export default Home;
