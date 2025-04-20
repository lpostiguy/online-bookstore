import React, { useEffect, useState } from "react";
import bookPlaceholder from "../../assets/img/book.png";

export const StatistiquesSection: React.FC = () => {
  const [commandes, setCommandes] = useState<any[]>([]);
  const [emprunts, setEmprunts] = useState<any[]>([]);
  const [view, setView] = useState<string>("");

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

  return (
    <div className="rounded-xl w-full bg-slate-100 shadow-md h-1/2 p-6">
      <h2 className="text-2xl font-bold">Statistiques</h2>
      <div className="flex space-x-4 py-6">
        <button
          className={`${
            view === "Commande"
              ? "bg-[#8e80d9] bg-opacity-90 text-slate-100"
              : "bg-slate-200 text-slate-800 hover:bg-slate-300"
          } py-2 px-4 rounded-xl transition duration-300 ease-in-out`}
          onClick={() => setView("Commande")}
        >
          Voir toutes les commandes
        </button>
        <button
          className={`${
            view === "Emprunt"
              ? "bg-[#8e80d9] bg-opacity-90 text-slate-100"
              : "bg-slate-200 text-slate-800 hover:bg-slate-300"
          } py-2 px-4 rounded-xl transition duration-300 ease-in-out`}
          onClick={() => setView("Emprunt")}
        >
          Voir tous les emprunts
        </button>
      </div>

      {view === "Commande" && (
        <div className="mt-4">
          {commandes.map((commande, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 px-10 shadow-sm flex justify-between items-center text-center m-2"
            >
              <div className="space-y-4">
                <img className="w-20" src={bookPlaceholder} alt="Book" />
                <p className="line-clamp-1 text-left">
                  {commande.livre.titre}, {commande.livre.auteur}
                </p>
              </div>
              <div className="space-y-4">
                <p className="line-clamp-1">
                  Date de la commande :{" "}
                  {new Date(commande.dateCommande).toLocaleDateString("fr-FR")}
                </p>
                <p className="line-clamp-1">
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
              className="bg-white rounded-xl p-4 px-10 shadow-sm flex justify-between items-center text-center m-2"
            >
              <div className="space-y-4">
                <img className="w-20" src={bookPlaceholder} alt="Book" />
                <p className="line-clamp-1 text-left">
                  {emprunt.livre.titre}, {emprunt.livre.auteur}
                </p>
              </div>
              <div className="space-y-4">
                <p className="line-clamp-1">
                  Id Adherent : {emprunt.idAdherent}
                </p>
                <p className="line-clamp-1">
                  Date d'emprunt :{" "}
                  {new Date(emprunt.dateEmprunt).toLocaleDateString("fr-FR")}
                </p>
                <p className="line-clamp-1">
                  Date de retour :{" "}
                  {new Date(emprunt.dateRetour).toLocaleDateString("fr-FR")}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
