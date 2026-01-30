import React, { useEffect, useState } from "react";

import bookPlaceholder from "../../assets/img/book.png";

export const CommandesSection: React.FC = () => {
  const [commandes, setCommandes] = useState<any[]>([]);

  useEffect(() => {
    const userId = 1;
    const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";

    fetch(`${API_URL}/mes-commandes?userId=${userId}`)
      .then((res) => res.json())
      .then((data) => setCommandes(data));
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
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-center w-full md:w-auto md:text-left">
          My Orders
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
                Order Date:{" "}
                {new Date(commandes.dateCommande).toLocaleDateString("en-US")}
              </p>
              <p className="line-clamp-1">
                Order Status: {translateStatus(commandes.etatCommande)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
