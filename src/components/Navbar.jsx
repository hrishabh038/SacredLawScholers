import React, { useEffect, useState } from "react";
import { Logo } from "../assets/assests";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation, useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const Navbar = ({ className }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [dropDown, setDropDown] = useState(false);
  const [avatarDropDown, setAvatarDropDown] = useState(false);
  return (
    <nav
      className={"flex items-center gap-6 justify-between"}
    >
      <img
        src={Logo}
        className="w-[150px] md:w-[170px]"
        onClick={() => navigate("/")}
      />
      {!pathname.startsWith("/auth") && (
        <>
          <ul className="hidden sm:flex items-center gap-4">
            <NavLink title={"Home"} link={"/"} />
            <NavLink title={"About"} link={"/about"} />
            <NavLink title={"Contact"} link={"/contact"} />
          </ul>
          {/* <ul className="hidden sm:flex items-center gap-2">
            <NavLink title={"Login"} link={"/auth/login"} />/
            <NavLink title={"Register"} link={"/auth/register"} />
          </ul> */}

          <div className="hidden sm:block relative">
            <div
              className="flex items-center gap-2 cursor-pointer "
              onClick={() => setAvatarDropDown(!avatarDropDown)}
            >
              <div className="text-sm bg-neutral-300 w-[35px] h-[35px] rounded-full border border-neutral-200 text-white flex items-center justify-center">
                HJ
              </div>
              <div>Hrishabh Jain</div>
            </div>
            {avatarDropDown && (
              <ul className="absolute p-4 border border-neutral-200 bg-white shadow rounded mt-[10px] right-0 w-[250px]">
                <NavLink link={"/profile/hrishabh038"} title={"Profile"} />
                <NavLink
                        link={"/create-blog"}
                        title={"Create Blog"}
                      />
                <div className="w-full h-[1px] bg-neutral-200 my-2"></div>
                <div className="px-2 hover:bg-neutral-200/60 border border-transparent hover:border-neutral-200 rounded cursor-pointer">
                  Logout
                </div>
              </ul>
            )}
          </div>

          <div className="sm:hidden relative">
            <GiHamburgerMenu
              className="text-2xl"
              onClick={() => setDropDown(!dropDown)}
            />
            {dropDown && (
              <div className="p-4 absolute w-[250px] bg-white right-0 mt-[10px] rounded shadow border border-neutral-200 flex flex-col gap-4">
                <ul className="flex flex-col gap-2">
                  <NavLink title={"Home"} link={"/"} />
                  <NavLink title={"About"} link={"/about"} />
                  <NavLink title={"Contact"} link={"/contact"} />
                </ul>
                {/* <ul className="flex flex-col gap-2">
                  <NavLink title={"Login"} link={"/auth/login"} />
                  <NavLink title={"Register"} link={"/auth/register"} />
                </ul> */}
                <div className="relative">
                  <div
                    className="flex items-center gap-2 cursor-pointer "
                    onClick={() => setAvatarDropDown(!avatarDropDown)}
                  >
                    <div className="text-sm bg-neutral-300 w-[35px] h-[35px] rounded-full border border-neutral-200 text-white flex items-center justify-center">
                      HJ
                    </div>
                    <div>Hrishabh Jain</div>
                  </div>
                  {avatarDropDown && (
                    <ul className="absolute p-4 border border-neutral-200 bg-white shadow rounded mt-[10px] right-0 w-[250px]">
                      <NavLink
                        link={"/profile/hrishabh038"}
                        title={"Profile"}
                      />
                      <NavLink
                        link={"/create-blog"}
                        title={"Create Blog"}
                      />
                      <div className="w-full h-[1px] bg-neutral-200 my-2"></div>
                      <div className="px-2 hover:bg-neutral-200/60 border border-transparent hover:border-neutral-200 rounded cursor-pointer">
                        Logout
                      </div>
                    </ul>
                  )}
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </nav>
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
      className={twMerge(
        "px-2 hover:bg-neutral-200/60 border border-transparent hover:border-neutral-200 rounded cursor-pointer",
        active && "font-bold"
      )}
      onClick={() => navigate(link)}
    >
      {title}
    </li>
  );
};

export default Navbar;
