import React from "react";
import About from "./About/About";
import Adventure from "./Adventure/Adventure";
import Banner from "./Banner/Banner";
import Blog from "./Blog/Blog";
import Packages from "./Packages/Packages";
import Sponsor from "./Sponsor/Sponsor";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Packages></Packages>
      <Blog></Blog>
      <Adventure></Adventure>
      <Sponsor></Sponsor>
    </div>
  );
};

export default Home;
