import React, { useEffect, useState } from "react";
import bookPlaceholder from "../../assets/img/book.png";

export const EmpruntsSection: React.FC = () => {
  const [emprunts, setEmprunts] = useState<any[]>([]);

  useEffect(() => {
    const userId = 1;

    fetch(`http://localhost:3001/mes-emprunts?userId=${userId}`)
      .then((res) => res.json())
      .then((data) => setEmprunts(data));
  }, []);

  return (
    <div className="rounded-xl w-full bg-slate-100 shadow-md h-1/2 p-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Mes emprunts</h2>
      </div>
      <div className="mt-4">
        {emprunts.map((emprunt, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-4 px-10 shadow-sm flex justify-between items-center text-center m-2"
          >
            <div className="space-y-4">
              <img className="w-20" src={bookPlaceholder} alt="Place Holder" />
              <p className="line-clamp-1 text-left">
                {emprunt.livre.titre}, {emprunt.livre.auteur}
              </p>
            </div>
            <div className="space-y-4">
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
    </div>
  );
};
