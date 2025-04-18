import React, { useEffect, useState } from "react";
import arrowSvg from "../../assets/svg/arrow.svg";
import { Link } from "react-router-dom";

export const RecommendedSection: React.FC = () => {
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    //  fetch("http://localhost:3001/api/users")
    //    .then((res) => res.json())
    //    .then((data) => setBooks(data));
  }, []);

  return (
    <div className="rounded-xl w-3/4 bg-slate-100 shadow-md h-1/2 p-6">
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
    </div>
  );
};
