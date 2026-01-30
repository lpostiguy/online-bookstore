import React, { useEffect, useState } from "react";

import bookPlaceholder from "../../assets/img/book.png";
import profilePlaceholderSvg from "../../assets/svg/profile.svg";

export const StatistiquesSection: React.FC = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const [loans, setLoans] = useState<any[]>([]);
  const [borrowCounts, setBorrowCounts] = useState<any[]>([]);
  const [topReaders, setTopReaders] = useState<any[]>([]);
  const [view, setView] = useState<string>("Order");

  useEffect(() => {
    const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";
    fetch(`${API_URL}/orders`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  useEffect(() => {
    const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";
    fetch(`${API_URL}/loans`)
      .then((res) => res.json())
      .then((data) => setLoans(data));
  }, []);

  useEffect(() => {
    const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";
    fetch(`${API_URL}/stats/borrow-count-per-book`)
      .then((res) => res.json())
      .then((data) => setBorrowCounts(data));
  }, []);

  useEffect(() => {
    const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";
    fetch(`${API_URL}/stats/top-readers`)
      .then((res) => res.json())
      .then((data) => setTopReaders(data));
  }, []);

  return (
    <div className="rounded-xl w-full bg-slate-100 shadow-md h-1/2 p-6">
      <h2 className="text-2xl font-bold text-center w-full md:w-auto md:text-left">
        Statistics
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6 items-stretch">
        <button
          className={`${
            view === "Order"
              ? "bg-[#8e80d9] bg-opacity-90 text-slate-100"
              : "bg-slate-200 text-slate-800 hover:bg-slate-300"
          } p-4 rounded-xl transition duration-300 ease-in-out`}
          onClick={() => setView("Order")}
        >
          View all orders
        </button>
        <button
          className={`${
            view === "Loan"
              ? "bg-[#8e80d9] bg-opacity-90 text-slate-100"
              : "bg-slate-200 text-slate-800 hover:bg-slate-300"
          } p-4 rounded-xl transition duration-300 ease-in-out`}
          onClick={() => setView("Loan")}
        >
          View all loans
        </button>
        <button
          className={`${
            view === "BookLoans"
              ? "bg-[#8e80d9] bg-opacity-90 text-slate-100"
              : "bg-slate-200 text-slate-800 hover:bg-slate-300"
          } p-4 rounded-xl transition duration-300 ease-in-out`}
          onClick={() => setView("BookLoans")}
        >
          <p>View loan count per book (descending)</p>
        </button>
        <button
          className={`${
            view === "TopMembers"
              ? "bg-[#8e80d9] bg-opacity-90 text-slate-100"
              : "bg-slate-200 text-slate-800 hover:bg-slate-300"
          } p-4 rounded-xl transition duration-300 ease-in-out`}
          onClick={() => setView("TopMembers")}
        >
          <p>View top 5 active members</p>
        </button>
      </div>

      {view === "Order" && (
        <div className="mt-4">
          {orders.map((order, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 px-10 shadow-sm flex flex-col lg:flex-row justify-center lg:justify-between items-center text-center m-2"
            >
              <div className="space-y-4 pb-4 lg:pb-0">
                <img
                  className="w-20 mx-auto lg:mx-0"
                  src={bookPlaceholder}
                  alt="Book"
                />
                <p className="text-center lg:text-left">
                  {order.book.title}, {order.book.author}
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-center lg:text-left">
                  Order Date:{" "}
                  {new Date(order.orderDate).toLocaleDateString("en-US")}
                </p>
                <p className="text-center lg:text-left">
                  Order Status: {order.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {view === "Loan" && (
        <div className="mt-4">
          {loans.map((loan, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 px-10 shadow-sm flex flex-col lg:flex-row justify-center lg:justify-between items-center text-center m-2"
            >
              <div className="space-y-4 pb-4 lg:pb-0">
                <img
                  className="w-20 mx-auto lg:mx-0"
                  src={bookPlaceholder}
                  alt="Book"
                />
                <p className="text-left">
                  {loan.book.title}, {loan.book.author}
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-center lg:text-left">
                  Member ID: {loan.memberId}
                </p>
                <p className="text-center lg:text-left">
                  Loan Date:{" "}
                  {new Date(loan.loanDate).toLocaleDateString("en-US")}
                </p>
                <p className="text-center lg:text-left">
                  Return Date:{" "}
                  {new Date(loan.dueDate).toLocaleDateString("en-US")}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {view === "BookLoans" && (
        <div className="mt-4">
          {borrowCounts.map((borrowCount, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 px-10 shadow-sm flex flex-col lg:flex-row justify-center lg:justify-between items-center text-center m-2"
            >
              <div className="space-y-4 pb-4 lg:pb-0">
                <img
                  className="w-20 mx-auto lg:mx-0"
                  src={bookPlaceholder}
                  alt="Book"
                />
                <div className="space-y-1">
                  <p className="text-center lg:text-left">
                    Book Title: {borrowCount.title}
                  </p>
                  <p className="text-center lg:text-left">
                    Author: {borrowCount.author}
                  </p>
                  <p className="text-center lg:text-left">
                    Book ID: {borrowCount.bookId}
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-center lg:text-left">
                  Loan Count: {borrowCount.borrowCount}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      {view === "TopMembers" && (
        <div className="mt-4">
          {topReaders.map((topReader, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 px-10 shadow-sm flex flex-col lg:flex-row justify-center lg:justify-between items-center text-center m-2"
            >
              <div className="space-y-4 pb-4 lg:pb-0">
                <img
                  className="w-20 mx-auto lg:mx-0"
                  src={profilePlaceholderSvg}
                  alt="Profile"
                />
                <div className="flex lg:flex-col space-x-4 lg:space-x-0">
                  <p className="text-center lg:text-left">
                    Name: {topReader.name}
                  </p>
                  <p className="text-center lg:text-left">
                    ID: {topReader.memberId}
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-center lg:text-left">
                  Loan Count: {topReader.borrowCount}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
