import React, { useEffect, useState } from "react";
import bookPlaceholder from "../../assets/img/book.png";

export const CommandesSection: React.FC = () => {
  const [commandes, setCommandes] = useState<any[]>([]);

  useEffect(() => {
    const userId = 1;

    fetch(`http://localhost:3001/mes-commandes?userId=${userId}`)
      .then((res) => res.json())
      .then((data) => setCommandes(data));
  }, []);

  return (
    <div className="rounded-xl w-full bg-slate-100 shadow-md h-1/2 p-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-center w-full md:w-auto md:text-left">
          Mes commandes
        </h2>
      </div>
      <div className="mt-4">
        {commandes.map((commandes, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-4 px-10 shadow-sm flex flex-col lg:flex-row justify-center lg:justify-between items-center text-center m-2"
          >
            <div className="space-y-4 pb-4 lg:pb-0">
              <img
                className="w-20 mx-auto lg:mx-0"
                src={bookPlaceholder}
                alt="Place Holder"
              />
              <p className="line-clamp-1 text-left">
                {commandes.livre.titre}, {commandes.livre.auteur}
              </p>
            </div>
            <div className="space-y-4">
              <p className="line-clamp-1">
                Date de la commande :{" "}
                {new Date(commandes.dateCommande).toLocaleDateString("fr-FR")}
              </p>
              <p className="line-clamp-1">
                État de la commande : {commandes.etatCommande}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
