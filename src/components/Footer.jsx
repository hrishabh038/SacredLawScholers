import React, { useEffect, useState } from "react";
import { Logo } from "../assets/assests";
import { FaFacebookSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 pb-[40px]">
        <div className="w-full md:w-[500px] flex flex-col gap-6">
          <img
            src={Logo}
            className="bg-blend-multiply w-[150px] bg-neutral-200"
          />
          <p className="text-[16px]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
          <ul className="flex gap-6">
            <NavLink title={"Home"} link={"/"} />
            <NavLink title={"About"} link={"/about"} />
            <NavLink title={"Contact"} link={"/contact"} />
          </ul>
        </div>
        <div className="p-4 bg-white rounded w-full md:w-[300px] flex flex-col gap-6 border border-neutral-200 shadow-xs">
          <div className="flex flex-col text-center">
            <p className="font-bold">Recent Judgements</p>
            <p className="text-neutral-400 text-sm">
              Get all info about recent judgement here.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <input
              className="outline-none rounded border border-neutral-300 w-full py-2 px-4"
              placeholder="Your Email"
            />
            <div className="bg-blue-500 hover:bg-blue-700 cursor-pointer text-white rounded text-center font-bold py-2 px-4">
              Subscribe
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-200 pt-[40px] flex flex-col md:flex-row gap-5 items-center justify-between">
        <p className=" text-sm text-neutral-400">
          Copyright © 2025 Sacred Law Scholers.
        </p>
        <ul className="flex items-center gap-2 text-3xl">
          <li>
            <FaWhatsappSquare className=" text-[#2CD46B]" />
          </li>
          <li>
            <FaFacebookSquare className="text-[#486CB4]" />
          </li>
          <li>
            <FaLinkedin className="text-[#087BB7]" />
          </li>
        </ul>
      </div>
    </div>
  );
};

const NavLink = ({ link, title }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (pathname === link) setActive(true);
    else setActive(false);
  }, [pathname, link]);
  return (
    <li
      className={`px-2 hover:bg-neutral-200/60 border border-transparent hover:border-neutral-200 rounded cursor-pointer ${active && "font-bold"}`}
      onClick={() => navigate(link)}
    >
      {title}
    </li>
  );
};

export default Footer;
