import React, { useEffect, useState, useRef } from "react";
import { Logo } from "../assets/assests";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContextProvider";
import Loading from "./Loading";
import { useGetUser } from "../hooks/hooks";

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { token } = useAuth();

  return (
    <nav className="flex items-center gap-6 justify-between">
      <img
        src={Logo}
        className="w-[150px] md:w-[170px]"
        onClick={() => navigate("/")}
        alt="Logo"
      />
      <MainMenu />
      {token ? (
        <ProfileAvatar className="hidden sm:block" />
      ) : (
        <LoginRegister />
      )}
      <HamburgerMenu />
    </nav>
  );
};

const HamburgerMenu = () => {
  const [dropDown, setDropDown] = useState(false);
  const { token } = useAuth();
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="sm:hidden relative" ref={dropdownRef}>
      <GiHamburgerMenu
        className="text-2xl"
        onClick={() => setDropDown(!dropDown)}
        aria-label="Toggle menu"
      />
      {dropDown && (
        <div className="p-4 absolute w-[300px] bg-white right-0 mt-2 rounded shadow border border-gray-200 flex flex-col gap-2">
          <MainMenu hamburgarMenu />
          {token ? <ProfileAvatar /> : <LoginRegister hamburgarMenu />}
        </div>
      )}
    </div>
  );
};

const LoginRegister = ({ hamburgarMenu }) => (
  <ul
    className={`flex ${
      hamburgarMenu ? "flex-col gap-2" : "hidden sm:flex items-center gap-1"
    }`}
  >
    <NavLink title="Login" link="/auth/login" />
    <NavLink title="Register" link="/auth/register" />
  </ul>
);

const MainMenu = ({ hamburgarMenu }) => (
  <>
    <ul
      className={`flex ${
        hamburgarMenu ? "flex-col gap-2" : "hidden sm:flex items-center gap-4"
      }`}
    >
      <NavLink title="Home" link="/" />
      <NavLink title="About" link="/about" />
      <NavLink title="Contact" link="/contact" />
    </ul>
    {hamburgarMenu && <div className="w-full h-[1px] bg-gray-200 my-1"></div>}
  </>
);

function getInitials(fullName) {
  if (!fullName) {
    return ""; // Return an empty string if fullName is undefined or null
  }
  const nameParts = fullName.split(" ");
  const firstNameInitial = nameParts[0]?.charAt(0) || "";
  const lastNameInitial = nameParts[nameParts.length - 1]?.charAt(0) || "";
  return firstNameInitial + lastNameInitial;
}
const ProfileAvatar = ({ className }) => {
  const { username, logout } = useAuth();
  const [avatarDropDown, setAvatarDropDown] = useState(false);
  const [user, loading, error] = useGetUser({ username: username });
  const dropdownRef = useRef(null);
  const nameArr = user?.full_name.split("");
  const isAdmin = user?.role === "admin";
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setAvatarDropDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setAvatarDropDown(!avatarDropDown)}
      >
        <div className="text-sm bg-gray-100 border border-gray-200 w-[35px] h-[35px] rounded-full text-gray-500 flex items-center justify-center">
          {getInitials(user?.full_name)}
        </div>
        <div>{user?.full_name}</div>
      </div>
      {avatarDropDown && (
        <ul className="absolute p-4 border border-gray-200 bg-white shadow rounded mt-2 right-0 w-[300px] flex flex-col gap-2">
          <NavLink link={`/profile/${username}`} title="Profile" />
          <NavLink link="/create-blog" title="Create Blog" />
          {isAdmin && <AdminMenu />}
          <div className="w-full h-[1px] bg-gray-200 my-1"></div>
          <div
            onClick={logout}
            className="px-2 hover:bg-gray-200/60 border border-transparent hover:border-gray-200 rounded cursor-pointer"
          >
            Logout
          </div>
        </ul>
      )}
    </div>
  );
};

const AdminMenu = () => (
  <>
    <div className="w-full h-[1px] bg-gray-200 my-1"></div>
    <NavLink link="/user-management" title="User Management" />
    <NavLink link="/approve-blogs" title="Approve Blogs" />
  </>
);

const NavLink = ({ link, title }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(pathname === link);
  }, [pathname, link]);

  return (
    <li
      className={`px-2 hover:bg-gray-200/60 border border-transparent hover:border-gray-200 rounded cursor-pointer ${
        active && "font-semibold"
      }`}
      onClick={() => navigate(link)}
    >
      {title}
    </li>
  );
};

export default Navbar;
