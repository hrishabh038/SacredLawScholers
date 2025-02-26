import React from "react";
import Badge from "./Badge";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const navigate = useNavigate()
  const paragraphStyle = {
    display: "-webkit-box",
    WebkitLineClamp: 4, // Number of lines to show
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis", // Adds ellipsis (...) at the end of truncated text
  };
  return (
    <div onClick={() => navigate("/blog/23456789876543")} className="flex flex-col gap-4 p-4 rounded border border-neutral-200 shadow-xs cursor-pointer hover:shadow-xl">
      <div className="bg-neutral-300 aspect-video rounded"></div>
      <div className=" flex flex-col gap-2">
        <Badge />
        <p style={paragraphStyle} className="text-justify">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        <div className="text-neutral-400 text-xs border-t border-neutral-200 pt-3 flex items-center justify-between">
            <div className="flex items-center gap-1">
                <div className="flex items-center justify-center rounded-full text-sm w-[25px] h-[25px] text-[10px] text-white bg-neutral-300">AA</div>
                <p>Ajay Agrawal</p>
            </div>
          <p>26 March 2026</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
