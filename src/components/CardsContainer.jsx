import React from "react";
import Card from "./Card";
import dataPopulaiton from "../metadata";

const CardsContainer = ({ blogs, heading }) => {
  return (
    <div className="flex flex-col gap-5">
      {heading && (
        <div className="text-xl font-bold text-gray-500">{heading}</div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {blogs.map((blog, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  );
};

export default CardsContainer;
