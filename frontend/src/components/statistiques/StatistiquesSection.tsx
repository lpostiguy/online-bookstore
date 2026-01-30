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
    const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";
    fetch(`${API_URL}/emprunts`)
      .then((res) => res.json())
      .then((data) => setEmprunts(data));
  }, []);

  useEffect(() => {
    const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";
    fetch(`${API_URL}/stats/borrow-count-per-book`)
      .then((res) => res.json())
      .then((data) => setBorrowCounts(data));
  }, []);

  useEffect(() => {
    const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";
    fetch(`${API_URL}/stats/top-readers`)
      .then((res) => res.json())
      .then((data) => setTopReaders(data));
  }, []);

  const translateStatus = (status: string) => {
    switch (status) {
      case "expédiée":
        return "Shipped";
      case "livrée":
        return "Delivered";
      case "en attente":
        return "Pending";
      case "annulée":
        return "Cancelled";
      default:
        return status;
    }
  };

  return (
    <div className="rounded-xl w-full bg-slate-100 shadow-md h-1/2 p-6">
      <h2 className="text-2xl font-bold text-center w-full md:w-auto md:text-left">
        Statistics
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
          View all orders
        </button>
        <button
          className={`${
            view === "Emprunt"
              ? "bg-[#8e80d9] bg-opacity-90 text-slate-100"
              : "bg-slate-200 text-slate-800 hover:bg-slate-300"
          } p-4 rounded-xl transition duration-300 ease-in-out`}
          onClick={() => setView("Emprunt")}
        >
          View all loans
        </button>
        <button
          className={`${
            view === "EmpruntParLivre"
              ? "bg-[#8e80d9] bg-opacity-90 text-slate-100"
              : "bg-slate-200 text-slate-800 hover:bg-slate-300"
          } p-4 rounded-xl transition duration-300 ease-in-out`}
          onClick={() => setView("EmpruntParLivre")}
        >
          <p>View loan count per book (descending)</p>
        </button>
        <button
          className={`${
            view === "TopAdhérents"
              ? "bg-[#8e80d9] bg-opacity-90 text-slate-100"
              : "bg-slate-200 text-slate-800 hover:bg-slate-300"
          } p-4 rounded-xl transition duration-300 ease-in-out`}
          onClick={() => setView("TopAdhérents")}
        >
          <p>View top 5 active members</p>
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
                  Order Date:{" "}
                  {new Date(commande.dateCommande).toLocaleDateString("en-US")}
                </p>
                <p className="text-center lg:text-left">
                  Order Status: {translateStatus(commande.etatCommande)}
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
                  Member ID: {emprunt.idAdherent}
                </p>
                <p className="text-center lg:text-left">
                  Loan Date:{" "}
                  {new Date(emprunt.dateEmprunt).toLocaleDateString("en-US")}
                </p>
                <p className="text-center lg:text-left">
                  Return Date:{" "}
                  {new Date(emprunt.dateRetour).toLocaleDateString("en-US")}
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
                    Book Title: {borrowCount.titre}
                  </p>
                  <p className="text-center lg:text-left">
                    Author: {borrowCount.auteur}
                  </p>
                  <p className="text-center lg:text-left">
                    Book ID: {borrowCount.idLivre}
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-center lg:text-left">
                  Loan Count: {borrowCount.borrowCount}
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
                    Name: {topReaders.nom}
                  </p>
                  <p className="text-center lg:text-left">
                    ID: {topReaders.idAdherent}
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-center lg:text-left">
                  Loan Count: {topReaders.borrowCount}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
