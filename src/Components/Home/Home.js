import React from "react";
import { Spinner } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import About from "./About/About";
import Adventure from "./Adventure/Adventure";
import Banner from "./Banner/Banner";
import Blog from "./Blog/Blog";
import Packages from "./Packages/Packages";
import Sponsor from "./Sponsor/Sponsor";

const Home = () => {
  const { isloading } = useAuth();
  //  fix redirect issue.. like when when we refresh the website the private page redirect to login page..
  if (isloading) {
    return (
      <Spinner
        className="d-flex justify-content-center align-items-center my-5 mx-auto"
        animation="border"
      />
    );
  }
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
