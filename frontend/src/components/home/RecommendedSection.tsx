import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { ProductPage } from "../ProductPage";
import arrowSvg from "../../assets/svg/arrow.svg";
import bookPlaceholder from "../../assets/img/book.png";

interface Props {
  showProductPage: boolean;
  setShowProductPage: React.Dispatch<React.SetStateAction<boolean>>;
}

export const RecommendedSection: React.FC<Props> = ({
  showProductPage,
  setShowProductPage,
}) => {
  const [selectedBook, setSelectedBook] = useState<number>();
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_URL || "http://localhost:3001"}/stats/borrow-count-per-book`,
    )
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <>
      {showProductPage ? (
        <ProductPage
          book={books[selectedBook ? selectedBook : 0]}
          setShowProductPage={setShowProductPage}
        />
      ) : (
        <div className="rounded-xl w-full lg:w-3/4 bg-slate-100 shadow-md h-auto lg:h-1/2 p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-center md:text-left w-full md:w-auto">
              Most Popular
            </h2>
            <Link
              className="bg-[#8e80d9] bg-opacity-90 py-2 px-4 rounded-xl text-slate-100 justify-between space-x-1 hover:bg-opacity-60 ease-in-out transition duration-300 hidden md:flex"
              to="/explore"
            >
              <p>See more</p>
              <img src={arrowSvg} alt="Arrow" />
            </Link>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center">
            {books.slice(0, 12).map((book, index) => (
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
                  src={book.imageUrl || bookPlaceholder}
                  alt="Place Holder"
                />
                <p className="line-clamp-1">{book.title}</p>
              </button>
            ))}
          </div>
          <Link
            className="mt-6 flex justify-center items-center bg-[#8e80d9] bg-opacity-90 rounded-xl text-slate-100 space-x-1 hover:bg-opacity-60 transition duration-300 w-full py-3 md:hidden"
            to="/explore"
          >
            <p>See more</p>
            <img src={arrowSvg} alt="Arrow" className="w-5 h-5 pt-1" />
          </Link>
        </div>
      )}
    </>
  );
};
