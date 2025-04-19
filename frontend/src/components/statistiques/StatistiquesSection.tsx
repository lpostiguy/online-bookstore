import React, { useEffect, useState } from "react";

export const StatistiquesSection: React.FC = () => {
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    //fetch("http://localhost:3001/api/users")
    //  .then((res) => res.json())
    //  .then((data) => setBooks(data));
  }, []);

  return (
    <div className="rounded-xl w-full bg-slate-100 shadow-md h-1/2 p-6">
      <h2 className="text-2xl font-bold">Statistiques</h2>
    </div>
  );
};
