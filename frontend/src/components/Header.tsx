import React, { useState } from "react";
import profileSvg from "../assets/svg/profile.svg";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  const [showProfileDropDown, setShowProfileDropDown] =
    useState<boolean>(false);

  return (
    <>
      <div className="bg-slate-100 h-28 w-full flex justify-end items-center p-8">
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
              Mes Emprunt
            </Link>
            <Link
              className="w-full flex justify-center text-center p-2 bg-[#dbd8ed] hover:bg-[#b6aeec] hover:text-white"
              to="/commandes"
            >
              Mes Commandes
            </Link>
          </div>
        )}
      </div>
    </>
  );
};
