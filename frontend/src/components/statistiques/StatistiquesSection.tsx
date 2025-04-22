import React, { useEffect, useState } from "react";
import bookPlaceholder from "../../assets/img/book.png";
import profilePlaceholderSvg from "../../assets/svg/profile.svg";

export const StatistiquesSection: React.FC = () => {
  const [commandes, setCommandes] = useState<any[]>([]);
  const [emprunts, setEmprunts] = useState<any[]>([]);
  const [borrowCounts, setBorrowCounts] = useState<any[]>([]);
  const [topReaders, setTopReaders] = useState<any[]>([]);
  const [view, setView] = useState<string>("Commande");

  useEffect(() => {
    fetch(`http://localhost:3001/commandes`)
      .then((res) => res.json())
      .then((data) => setCommandes(data));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3001/emprunts`)
      .then((res) => res.json())
      .then((data) => setEmprunts(data));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3001/stats/borrow-count-per-book`)
      .then((res) => res.json())
      .then((data) => setBorrowCounts(data));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3001/stats/top-readers`)
      .then((res) => res.json())
      .then((data) => setTopReaders(data));
  }, []);

  return (
    <div className="rounded-xl w-full bg-slate-100 shadow-md h-1/2 p-6">
      <h2 className="text-2xl font-bold text-center w-full md:w-auto md:text-left">
        Statistiques
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6 items-stretch">
        <button
          className={`${
            view === "Commande"
              ? "bg-[#8e80d9] bg-opacity-90 text-slate-100"
              : "bg-slate-200 text-slate-800 hover:bg-slate-300"
          } p-4 rounded-xl transition duration-300 ease-in-out`}
          onClick={() => setView("Commande")}
        >
          Voir toutes les commandes
        </button>
        <button
          className={`${
            view === "Emprunt"
              ? "bg-[#8e80d9] bg-opacity-90 text-slate-100"
              : "bg-slate-200 text-slate-800 hover:bg-slate-300"
          } p-4 rounded-xl transition duration-300 ease-in-out`}
          onClick={() => setView("Emprunt")}
        >
          Voir tous les emprunts
        </button>
        <button
          className={`${
            view === "EmpruntParLivre"
              ? "bg-[#8e80d9] bg-opacity-90 text-slate-100"
              : "bg-slate-200 text-slate-800 hover:bg-slate-300"
          } p-4 rounded-xl transition duration-300 ease-in-out`}
          onClick={() => setView("EmpruntParLivre")}
        >
          <p>Voir le nombre d'emprunts par livre (en ordre décroissant)</p>
        </button>
        <button
          className={`${
            view === "TopAdhérents"
              ? "bg-[#8e80d9] bg-opacity-90 text-slate-100"
              : "bg-slate-200 text-slate-800 hover:bg-slate-300"
          } p-4 rounded-xl transition duration-300 ease-in-out`}
          onClick={() => setView("TopAdhérents")}
        >
          <p>Voir le top 5 des adhérents ayant emprunté le plus de livres</p>
        </button>
      </div>

      {view === "Commande" && (
        <div className="mt-4">
          {commandes.map((commande, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 px-10 shadow-sm flex flex-col lg:flex-row justify-center lg:justify-between items-center text-center m-2"
            >
              <div className="space-y-4 pb-4 lg:pb-0">
                <img
                  className="w-20 mx-auto lg:mx-0"
                  src={bookPlaceholder}
                  alt="Book"
                />
                <p className="text-center lg:text-left">
                  {commande.livre.titre}, {commande.livre.auteur}
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-center lg:text-left">
                  Date de la commande :{" "}
                  {new Date(commande.dateCommande).toLocaleDateString("fr-FR")}
                </p>
                <p className="text-center lg:text-left">
                  État de la commande : {commande.etatCommande}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {view === "Emprunt" && (
        <div className="mt-4">
          {emprunts.map((emprunt, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 px-10 shadow-sm flex flex-col lg:flex-row justify-center lg:justify-between items-center text-center m-2"
            >
              <div className="space-y-4 pb-4 lg:pb-0">
                <img
                  className="w-20 mx-auto lg:mx-0"
                  src={bookPlaceholder}
                  alt="Book"
                />
                <p className="text-left">
                  {emprunt.livre.titre}, {emprunt.livre.auteur}
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-center lg:text-left">
                  Id Adherent : {emprunt.idAdherent}
                </p>
                <p className="text-center lg:text-left">
                  Date d'emprunt :{" "}
                  {new Date(emprunt.dateEmprunt).toLocaleDateString("fr-FR")}
                </p>
                <p className="text-center lg:text-left">
                  Date de retour :{" "}
                  {new Date(emprunt.dateRetour).toLocaleDateString("fr-FR")}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {view === "EmpruntParLivre" && (
        <div className="mt-4">
          {borrowCounts.map((borrowCount, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 px-10 shadow-sm flex flex-col lg:flex-row justify-center lg:justify-between items-center text-center m-2"
            >
              <div className="space-y-4 pb-4 lg:pb-0">
                <img
                  className="w-20 mx-auto lg:mx-0"
                  src={bookPlaceholder}
                  alt="Book"
                />
                <div className="space-y-1">
                  <p className="text-center lg:text-left">
                    Titre du livre : {borrowCount.titre}
                  </p>
                  <p className="text-center lg:text-left">
                    Auteur : {borrowCount.auteur}
                  </p>
                  <p className="text-center lg:text-left">
                    Id Livre : {borrowCount.idLivre}
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-center lg:text-left">
                  Nombre d'emprunts : {borrowCount.borrowCount}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      {view === "TopAdhérents" && (
        <div className="mt-4">
          {topReaders.map((topReaders, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 px-10 shadow-sm flex flex-col lg:flex-row justify-center lg:justify-between items-center text-center m-2"
            >
              <div className="space-y-4 pb-4 lg:pb-0">
                <img
                  className="w-20 mx-auto lg:mx-0"
                  src={profilePlaceholderSvg}
                  alt="Profile"
                />
                <div className="flex lg:flex-col space-x-4 lg:space-x-0">
                  <p className="text-center lg:text-left">
                    Nom : {topReaders.nom}
                  </p>
                  <p className="text-center lg:text-left">
                    Id : {topReaders.idAdherent}
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-center lg:text-left">
                  Nombre d'emprunts : {topReaders.borrowCount}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
