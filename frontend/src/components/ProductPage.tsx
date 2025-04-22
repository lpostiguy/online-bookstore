import React, { useEffect, useState } from "react";
import bookPlaceholder from "../assets/img/book.png";
import arrowSvg from "../assets/svg/arrow.svg";

interface props {
  livre: any;
  setShowProductPage: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ProductPage: React.FC<props> = ({ livre, setShowProductPage }) => {
  const [showConfirmationPage, setShowConfirmationPage] =
    useState<boolean>(false);
  const [action, setAction] = useState<string>("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleEmprunt = async () => {
    const userId = 1;

    try {
      const res = await fetch("http://localhost:3001/emprunts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
          livreId: livre.idLivre,
        }),
      });

      if (res.ok) {
        setShowConfirmationPage(true);
      } else {
        alert("Une erreur s'est produite lors de la commande.");
      }
    } catch (error) {
      console.error(error);
      alert("Erreur réseau ou serveur.");
    }
  };

  const handleCommande = async () => {
    const userId = 1;

    try {
      const res = await fetch("http://localhost:3001/commandes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
          livreId: livre.idLivre,
        }),
      });

      if (res.ok) {
        setShowConfirmationPage(true);
      } else {
        alert("Une erreur s'est produite lors de l'emprunt.");
      }
    } catch (error) {
      console.error(error);
      alert("Erreur réseau ou serveur.");
    }
  };

  return (
    <div className="rounded-xl w-full bg-slate-50 shadow-md h-auto p-4 space-y-4 pb-20">
      <button
        className="bg-[#8e80d9] bg-opacity-90 py-2 px-4 rounded-xl text-slate-100 flex justify-between space-x-1 hover:bg-opacity-60 ease-in-out transition duration-300"
        onClick={() => setShowProductPage(false)}
      >
        <img className="rotate-180" src={arrowSvg} alt="Arrow" />
        <p>Retour</p>
      </button>
      <div className="lg:flex lg:space-x-14 xl:space-x-20 lg:pt-2">
        <div className="bg-neutral-200 rounded-md flex justify-center items-center lg:w-1/2 h-64 lg:h-96">
          <img
            className="w-28 lg:w-32"
            src={bookPlaceholder}
            alt="Place Holder"
          />
        </div>
        <div className="space-y-2 mt-4 lg:mt-0 lg:w-1/2 text-center lg:text-left">
          <p className="text-4xl font-bold">{livre.titre}</p>
          <p className="font-semibold">Par {livre.auteur}</p>
          <p className="">Genre : {livre.genre}</p>
          {showConfirmationPage ? (
            <div className="flex flex-col items-start h-full pt-10 space-y-4">
              <p className="font-bold text-2xl text-center w-full lg:w-auto">
                {action} effectué avec succès !
              </p>
              <button
                className="bg-[#8e80d9] bg-opacity-90 py-2 px-4 rounded-xl text-slate-100 flex justify-between space-x-1 hover:bg-opacity-60 ease-in-out transition duration-300 mx-auto lg:mx-0"
                onClick={() => setShowProductPage(false)}
              >
                <img className="rotate-180" src={arrowSvg} alt="Arrow" />
                <p>Revenir à la page des livres</p>
              </button>
            </div>
          ) : (
            <>
              <div className="flex justify-center lg:justify-start space-x-4 py-6">
                <button
                  className="bg-[#8e80d9] bg-opacity-90 py-2 px-4 lg:px-10 xl:px-20 rounded-xl text-slate-100 flex justify-between space-x-1 hover:bg-opacity-60 ease-in-out transition duration-300"
                  onClick={() => {
                    handleCommande();
                    setAction("Commande");
                  }}
                >
                  <span>Commander</span>
                </button>
                <button
                  className="bg-[#80add9] bg-opacity-90 py-2 px-4 lg:px-6 rounded-xl text-slate-100 flex justify-between space-x-1 hover:bg-opacity-60 ease-in-out transition duration-300"
                  onClick={() => {
                    handleEmprunt();
                    setAction("Emprunt");
                  }}
                >
                  <span>Emprunter</span>
                </button>
              </div>
              <p className="text-sm">Aperçu du livre</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
