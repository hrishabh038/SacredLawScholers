import React from "react";
import { CardsContainer, Header } from "../components/components";
import dataPopulaiton from "../metadata";


const Home = () => {
  return (
    <div className="flex flex-col gap-14">
      <Header />
      <CardsContainer blogs={dataPopulaiton.blogPosts} />
    </div>
  );
};

export default Home;
  