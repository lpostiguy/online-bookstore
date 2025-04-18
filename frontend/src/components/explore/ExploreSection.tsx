import React, { useEffect, useState } from "react";
import { CategoriesSection } from "./CategoriesSection";

export const ExploreSection: React.FC = () => {
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    //fetch("http://localhost:3001/api/users")
    //  .then((res) => res.json())
    //  .then((data) => setBooks(data));
  }, []);

  return (
    <div className="rounded-xl w-4/5 bg-slate-100 shadow-md h-1/2 p-4">
      <CategoriesSection />
    </div>
  );
};
