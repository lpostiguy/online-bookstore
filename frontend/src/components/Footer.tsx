import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 text-slate-700 py-12 border-t">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">BiblioTech</h2>
          <p className="text-sm mt-1">
            Reading at your fingertips. Explore our world of knowledge.
          </p>
        </div>

        <div className="flex space-x-6 text-sm">
          <a href="#" className="hover:text-blue-600 transition">
            About
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            Contact
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            Legal Notice
          </a>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 mt-4">
        © {new Date().getFullYear()} BiblioTech. All rights reserved.
      </div>
    </footer>
  );
};
