import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";

import { DrawerMenuButton } from "./drawerMenu/DrawerMenuButton";
import logo from "../assets/img/logo.png";
import profileSvg from "../assets/svg/profile.svg";

export const Header: React.FC = () => {
  const [showProfileDropDown, setShowProfileDropDown] =
    useState<boolean>(false);
  const location = useLocation();

  return (
    <>
      <div className="bg-slate-100 h-28 w-full flex justify-between md:justify-end items-center p-8">
        <div className="flex justify-between md:hidden">
          <Link
            to="/home"
            className="flex items-center space-x-2 justify-center h-28 hover:opacity-80 transition ease-in-out duration-300"
          >
            <img className="w-10" src={logo} alt="Logo" />
            <div className="drop-shadow-sm text-2xl font-bold text-[#8e80d9]">
              <span>Biblio</span>
              <span>Tech</span>
            </div>
          </Link>
        </div>
        <div className="flex justify-end items-center">
          <button
            className="rounded-full"
            onClick={() => setShowProfileDropDown(!showProfileDropDown)}
          >
            <img className="h-14" src={profileSvg} alt="Profile" />
          </button>
          {showProfileDropDown && (
            <div className="bg-slate-200 w-40 absolute mt-32 rounded-lg overflow-hidden">
              <Link
                className="w-full flex justify-center text-center p-2 bg-[#dbd8ed] hover:bg-[#b6aeec] hover:text-white"
                to="/emprunts"
              >
                My Loans
              </Link>
              <Link
                className="w-full flex justify-center text-center p-2 bg-[#dbd8ed] hover:bg-[#b6aeec] hover:text-white"
                to="/commandes"
              >
                My Orders
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="h-auto bg-slate-200 drop-shadow-sm p-2 sm:p-4 flex justify-between md:hidden">
        <Link to={"/home"} draggable={false}>
          <DrawerMenuButton
            active={location.pathname === "/home"}
            label="Home"
          />
        </Link>
        <Link to={"/explore"} draggable={false}>
          <DrawerMenuButton
            active={location.pathname === "/explore"}
            label="Explore"
          />
        </Link>
        <Link to={"/statistiques"} draggable={false}>
          <DrawerMenuButton
            active={location.pathname === "/statistiques"}
            label="Statistics"
          />
        </Link>
      </div>
    </>
  );
};
