import React from "react";
import dataPopulaiton from "../metadata";

const Header = () => {
  const headerStyle = {
    position: "relative",
    height: "400px",
    borderRadius: "4px",
    overflow: "hidden",
    display: "flex",
    alignItems: "end",
    justifyContent: "center",
    color: "white",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
  };

  const backgroundStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `url('${dataPopulaiton.home.header.img}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "blur(2px)", // Adjust the blur effect as needed
    zIndex: 1,
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2,
    textAlign: "start",
    padding: "20px",
  };

  return (
    <div style={headerStyle}>
      <div style={backgroundStyle}></div>
      <div style={contentStyle}>
        <h1 className="text-xl sm:text-2xl">
          {dataPopulaiton.home.header.text}
        </h1>
      </div>
    </div>
  );
};

export default Header;
