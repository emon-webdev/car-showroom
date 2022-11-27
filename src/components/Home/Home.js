import React from "react";
import Advertise from "../Advertise";
import Banner from "./Banner";
import Category from "./Category";
import ClientSay from "./ClientSay";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category/>
      <Advertise/>
      <ClientSay />
    </div>
  );
};

export default Home;
