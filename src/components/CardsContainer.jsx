import React from "react";
import Card from "./Card";
import dataPopulaiton from "../metadata";

const CardsContainer = ({ blogs }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="text-xl font-bold text-neutral-500">Latest Blogs</div>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {blogs.map((blog, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  );
};

export default CardsContainer;
