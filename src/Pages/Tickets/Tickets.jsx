import React, { useState } from "react";
import { data } from "./data.js";
import { useNavigate } from "react-router-dom";
import "./Tickets.css";

function Tickets() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleQuery() {
    // Perform search or navigate as needed
    const matchingItems = data.filter(item =>
      item.sports_name.toLowerCase().includes(search.toLowerCase())
    );

    if (matchingItems.length === 1) {
      navigate(`/Tickets/${matchingItems[0].id}`);
    } else {
      alert("Please refine your search.");
    }
  }

  return (
    <section className="flex flex-col items-center bg-[var(--bg-color)] text-[var(--text-color)]">
      {/* Header Image */}
      <div className="w-full h-[300px] mb-10">
        <img
          src="/assets/ticket_banner1.jpg"
          alt="Sports Header"
          className="w-full h-full rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* Search Box */}
      <div className="flex gap-9 w-full max-w-lg mb-8">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search sports for Ticket Booking..."
          className="w-full px-6 py-4 border border-gray-500 rounded-lg shadow-md bg-[var(--second-bg-color)] text-[var(--text-color)] placeholder-gray-400 focus:outline-none focus:border-[var(--main-color)] transition-all duration-200"
        />
        <button
          className="cta px-4 py-3"
          onClick={handleQuery}
        >
          <span className="span gap-10">Search</span>
          <span className="second">
            <svg
              width="40px"
              height="15px"
              viewBox="0 0 66 43"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g
                id="arrow"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <path
                  className="one"
                  d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                  fill="#FFFFFF"
                ></path>
              </g>
            </svg>
          </span>
        </button>
      </div>

      {/* Sports List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {data
          .filter((item) =>
            item.sports_name.toLowerCase().includes(search.toLowerCase())
          )
          .map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/Tickets/${item.id}`)}
              className="cursor-pointer bg-[var(--second-bg-color)] p-6 rounded-lg shadow-lg flex items-center justify-center text-center transition-transform transform hover:scale-110 hover:bg-[var(--main-color)] hover:text-[var(--text-color)] hover:border-4 hover:border-cadetblue duration-300 ease-in-out"
            >
              <p className="font-semibold text-center">{item.sports_name}</p>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Tickets;
