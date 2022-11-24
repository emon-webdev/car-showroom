import React from "react";
import Banner from "./Banner";
import ClientSay from "./ClientSay";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <Banner />
      <Products/>
      <ClientSay />
    </div>
  );
};

export default Home;
