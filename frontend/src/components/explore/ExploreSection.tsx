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
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedBook, setSelectedBook] = useState<any | null>(null);
  const [books, setBooks] = useState<any[]>([]);

  const filteredBooks =
    selectedCategory === "All"
      ? books
      : books.filter((book) => book.genre === selectedCategory);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL || "http://localhost:3001"}/books`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <>
      {showProductPage ? (
        <ProductPage
          book={selectedBook || filteredBooks[0]}
          setShowProductPage={setShowProductPage}
        />
      ) : (
        <div className="rounded-xl w-full lg:w-4/5 bg-slate-100 shadow-md h-1/2 p-4">
          <CategoriesSection
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-center">
            {filteredBooks.map((book, index) => (
              <>
                <button
                  onClick={() => {
                    setShowProductPage(true);
                    setSelectedBook(book);
                  }}
                  key={index}
                  className="bg-white rounded-xl p-4 shadow-sm flex flex-col justify-center items-center text-center m-2 hover:bg-slate-200 transition duration-300 ease-in-out"
                >
                  <img
                    className="w-20"
                    src={book.imageUrl || bookPlaceholder}
                    alt="Place Holder"
                  />
                  <p className="line-clamp-1">
                    {book.title}, {book.author}
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
