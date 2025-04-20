import React, { useEffect, useState } from "react";
import arrowSvg from "../../assets/svg/arrow.svg";
import bookPlaceholder from "../../assets/img/book.png";
import { Link } from "react-router-dom";
import { ProductPage } from "../ProductPage";

interface Props {
  showProductPage: boolean;
  setShowProductPage: React.Dispatch<React.SetStateAction<boolean>>;
}

export const RecommendedSection: React.FC<Props> = ({
  showProductPage,
  setShowProductPage,
}) => {
  const [selectedBook, setSelectedBook] = useState<number>();
  const [livres, setLivres] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/livres")
      .then((res) => res.json())
      .then((data) => setLivres(data));
  }, []);

  return (
    <>
      {showProductPage ? (
        <ProductPage
          livre={livres[selectedBook ? selectedBook : 0]}
          setShowProductPage={setShowProductPage}
        />
      ) : (
        <div className="rounded-xl w-full lg:w-3/4 bg-slate-100 shadow-md h-1/2 p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Recommandé</h2>
            <Link
              className="bg-[#8e80d9] bg-opacity-90 py-2 px-4 rounded-xl text-slate-100 flex justify-between space-x-1 hover:bg-opacity-60 ease-in-out transition duration-300"
              to="/explore"
            >
              <p>Voir plus</p>
              <img src={arrowSvg} alt="Arrow" />
            </Link>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center">
            {livres.slice(0, 10).map((livre, index) => (
              <button
                onClick={() => {
                  setShowProductPage(true);
                  setSelectedBook(index);
                }}
                key={index}
                className="bg-white rounded-xl p-4 shadow-sm flex flex-col justify-center items-center text-center m-2 hover:bg-slate-200 transition duration-300 ease-in-out"
              >
                <img
                  className="w-20"
                  src={bookPlaceholder}
                  alt="Place Holder"
                />
                <p className="line-clamp-1">{livre.titre}</p>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
