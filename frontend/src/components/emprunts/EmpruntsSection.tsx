import React, { useEffect, useState } from "react";
import arrowSvg from "../../assets/svg/arrow.svg";
import { Link } from "react-router-dom";

export const EmpruntsSection: React.FC = () => {
  const [emprunts, setEmprunts] = useState<any[]>([]);

  useEffect(() => {
    //  fetch("http://localhost:3001/api/users")
    //    .then((res) => res.json())
    //    .then((data) => setEmprunts(data));
  }, []);

  return (
    <div className="rounded-xl w-full bg-slate-100 shadow-md h-1/2 p-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Mes emprunts</h2>
      </div>
    </div>
  );
};
