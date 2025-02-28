import React, { useEffect, useState } from "react";
import { Logo } from "../assets/assests";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <nav className={"flex items-center gap-6 justify-between"}>
      <img
        src={Logo}
        className="w-[150px] md:w-[170px]"
        onClick={() => navigate("/")}
      />
      {!pathname.startsWith("/auth") && (
        <>
          <MainMenu />
          {/* <LoginRegister /> */}
          <ProfileAvatar className={"hidden sm:block"} />
          <HamburgerMenu />
        </>
      )}
    </nav>
  );
};

const HamburgerMenu = () => {
  const [dropDown, setDropDown] = useState(false);
  return (
    <div className="sm:hidden relative">
      <GiHamburgerMenu
        className="text-2xl"
        onClick={() => setDropDown(!dropDown)}
      />
      {dropDown && (
        <div className="p-4 absolute w-[300px] bg-white right-0 mt-2 rounded shadow border border-neutral-200 flex flex-col gap-2">
          <MainMenu hamburgarMenu={true} />
          {/* <LoginRegister hamburgarMenu={true} /> */}
          <ProfileAvatar />
        </div>
      )}
    </div>
  );
};

const LoginRegister = ({ hamburgarMenu }) => {
  if (hamburgarMenu) {
    return (
      <ul className="flex flex-col gap-2">
        <NavLink title={"Login"} link={"/auth/login"} />
        <NavLink title={"Register"} link={"/auth/register"} />
      </ul>
    );
  }
  return (
    <ul className="hidden sm:flex items-center gap-1">
      <NavLink title={"Login"} link={"/auth/login"} />/
      <NavLink title={"Register"} link={"/auth/register"} />
    </ul>
  );
};

const MainMenu = ({ hamburgarMenu }) => {
  if (hamburgarMenu) {
    return (
      <>
        <ul className="flex flex-col gap-2">
          <NavLink title={"Home"} link={"/"} />
          <NavLink title={"About"} link={"/about"} />
          <NavLink title={"Contact"} link={"/contact"} />
        </ul>
        <div className="w-full h-[1px] bg-neutral-200 my-1"></div>
      </>
    );
  }
  return (
    <ul className="hidden sm:flex items-center gap-4">
      <NavLink title={"Home"} link={"/"} />
      <NavLink title={"About"} link={"/about"} />
      <NavLink title={"Contact"} link={"/contact"} />
    </ul>
  );
};

const ProfileAvatar = ({ className }) => {
  const [avatarDropDown, setAvatarDropDown] = useState(false);
  return (
    <div className={`relative ${className}`}>
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
        <ul className="absolute p-4 border border-neutral-200 bg-white shadow rounded mt-2 right-0 w-[300px] flex flex-col gap-2">
          <NavLink link={"/profile/hrishabh038"} title={"Profile"} />
          <NavLink link={"/create-blog"} title={"Create Blog"} />
          <AdminMenu />
          <div className="w-full h-[1px] bg-neutral-200 my-1"></div>
          <div className="px-2 hover:bg-neutral-200/60 border border-transparent hover:border-neutral-200 rounded cursor-pointer">
            Logout
          </div>
        </ul>
      )}
    </div>
  );
};

const AdminMenu = () => {
  return (
    <>
      <div className="w-full h-[1px] bg-neutral-200 my-1"></div>
      <NavLink link={"/view-users"} title={"View Users"} />
      <NavLink link={"/approve-blogs"} title={"Approve Blogs"} />
    </>
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
      className={`px-2 hover:bg-neutral-200/60 border border-transparent hover:border-neutral-200 rounded cursor-pointer ${
        active && "font-bold"
      }`}
      onClick={() => navigate(link)}
    >
      {title}
    </li>
  );
};

export default Navbar;
