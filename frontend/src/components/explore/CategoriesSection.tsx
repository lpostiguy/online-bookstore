import React from "react";

interface Props {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

export const CategoriesSection: React.FC<Props> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="rounded-xl w-full bg-slate-100 shadow-md h-auto p-4 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-center w-full md:w-auto md:text-left">
          Categories
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 py-6 items-stretch">
        <button
          className={`${
            selectedCategory === "All"
              ? "bg-[#8e80d9] text-slate-100"
              : "bg-[#dbd8ed] hover:bg-[#b6aeec] hover:text-slate-100"
          } rounded-xl bg-opacity-80 p-2 ease-in-out transition duration-300`}
          onClick={() => setSelectedCategory("All")}
        >
          <span>All</span>
        </button>
        <button
          className={`${
            selectedCategory === "Fiction"
              ? "bg-[#8e80d9] text-slate-100"
              : "bg-[#dbd8ed] hover:bg-[#b6aeec] hover:text-slate-100"
          } rounded-xl bg-opacity-80 p-2 ease-in-out transition duration-300`}
          onClick={() => setSelectedCategory("Fiction")}
        >
          <span>Fiction</span>
        </button>
        <button
          className={`${
            selectedCategory === "Romance"
              ? "bg-[#8e80d9] text-slate-100"
              : "bg-[#dbd8ed] hover:bg-[#b6aeec] hover:text-slate-100"
          } rounded-xl bg-opacity-80 p-2 ease-in-out transition duration-300`}
          onClick={() => setSelectedCategory("Romance")}
        >
          <span>Romance</span>
        </button>
        <button
          className={`${
            selectedCategory === "Biographies"
              ? "bg-[#8e80d9] text-slate-100"
              : "bg-[#dbd8ed] hover:bg-[#b6aeec] hover:text-slate-100"
          } rounded-xl bg-opacity-80 p-2 ease-in-out transition duration-300`}
          onClick={() => setSelectedCategory("Biographies")}
        >
          <span>Biographies</span>
        </button>
        <button
          className={`${
            selectedCategory === "Poetry"
              ? "bg-[#8e80d9] text-slate-100"
              : "bg-[#dbd8ed] hover:bg-[#b6aeec] hover:text-slate-100"
          } rounded-xl bg-opacity-80 p-2 ease-in-out transition duration-300`}
          onClick={() => setSelectedCategory("Poetry")}
        >
          <span>Poetry</span>
        </button>
        <button
          className={`${
            selectedCategory === "Comics"
              ? "bg-[#8e80d9] text-slate-100"
              : "bg-[#dbd8ed] hover:bg-[#b6aeec] hover:text-slate-100"
          } rounded-xl bg-opacity-80 p-2 ease-in-out transition duration-300`}
          onClick={() => setSelectedCategory("Comics")}
        >
          <span>Comics</span>
        </button>
        <button
          className={`${
            selectedCategory === "Cooking"
              ? "bg-[#8e80d9] text-slate-100"
              : "bg-[#dbd8ed] hover:bg-[#b6aeec] hover:text-slate-100"
          } rounded-xl bg-opacity-80 p-2 ease-in-out transition duration-300`}
          onClick={() => setSelectedCategory("Cooking")}
        >
          <span>Cooking</span>
        </button>
        <button
          className={`${
            selectedCategory === "History"
              ? "bg-[#8e80d9] text-slate-100"
              : "bg-[#dbd8ed] hover:bg-[#b6aeec] hover:text-slate-100"
          } rounded-xl bg-opacity-80 p-2 ease-in-out transition duration-300`}
          onClick={() => setSelectedCategory("History")}
        >
          <span>History</span>
        </button>
      </div>
    </div>
  );
};
