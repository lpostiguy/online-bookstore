import React from "react";
import logo from "../../assets/img/logo.png";
import { DrawerMenuButton } from "./DrawerMenuButton";
import homeInactiveSvg from "../../assets/svg/home-icon-inactive.svg";
import homeActiveSvg from "../../assets/svg/home-icon-active.svg";
import exploreInactiveSvg from "../../assets/svg/explore-inactive.svg";
import exploreActiveSvg from "../../assets/svg/explore-active.svg";
import statistiquesInactiveSvg from "../../assets/svg/statistiques-inactive.svg";
import statistiquesActiveSvg from "../../assets/svg/statistiques-active.svg";
import { Link, useLocation } from "react-router-dom";

export const DrawerMenu: React.FC = () => {
  const location = useLocation();
  return (
    <div className="hidden md:block w-64 h-[100hv] min-h-[800px] bg-slate-100 drop-shadow-xl px-8">
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
      <div className="mt-16 flex flex-col justify-center space-y-6">
        <Link to={"/home"} draggable={false}>
          <DrawerMenuButton
            active={location.pathname === "/home"}
            label="Accueil"
            iconActive={homeActiveSvg}
            iconInactive={homeInactiveSvg}
          />
        </Link>
        <Link to={"/explore"} draggable={false}>
          <DrawerMenuButton
            active={location.pathname === "/explore"}
            label="Explorer"
            iconActive={exploreActiveSvg}
            iconInactive={exploreInactiveSvg}
          />
        </Link>
        <Link to={"/statistiques"} draggable={false}>
          <DrawerMenuButton
            active={location.pathname === "/statistiques"}
            label="Statistiques"
            iconActive={statistiquesActiveSvg}
            iconInactive={statistiquesInactiveSvg}
          />
        </Link>
      </div>
    </div>
  );
};
