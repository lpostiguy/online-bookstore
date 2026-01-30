import React, { useEffect, useState } from "react";
import { CategoriesSection } from "./CategoriesSection";
import { ProductPage } from "../ProductPage";
import bookPlaceholder from "../../assets/img/book.png";

interface Props {
  showProductPage: boolean;
  setShowProductPage: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ExploreSection: React.FC<Props> = ({
  showProductPage,
  setShowProductPage,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tous");
  const [selectedBook, setSelectedBook] = useState<any | null>(null);
  const [livres, setLivres] = useState<any[]>([]);

  const filteredLivres =
    selectedCategory === "Tous"
      ? livres
      : livres.filter((livre) => livre.genre === selectedCategory);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL || "http://localhost:3001"}/livres`)
      .then((res) => res.json())
      .then((data) => setLivres(data));
  }, []);

  return (
    <>
      {showProductPage ? (
        <ProductPage
          livre={selectedBook || filteredLivres[0]}
          setShowProductPage={setShowProductPage}
        />
      ) : (
        <div className="rounded-xl w-full lg:w-4/5 bg-slate-100 shadow-md h-1/2 p-4">
          <CategoriesSection
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-center">
            {filteredLivres.map((livre, index) => (
              <>
                <button
                  onClick={() => {
                    setShowProductPage(true);
                    setSelectedBook(livre);
                  }}
                  key={index}
                  className="bg-white rounded-xl p-4 shadow-sm flex flex-col justify-center items-center text-center m-2 hover:bg-slate-200 transition duration-300 ease-in-out"
                >
                  <img
                    className="w-20"
                    src={bookPlaceholder}
                    alt="Place Holder"
                  />
                  <p className="line-clamp-1">
                    {livre.titre}, {livre.auteur}
                  </p>
                </button>
              </>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
