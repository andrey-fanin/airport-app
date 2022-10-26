import React, { useEffect, useState } from "react";
import { useInput } from "../hook/input";
import { useDebounce } from "../hook/debounce";
import axios from "../axios";
import { IAirport } from "../models/models";
import { useNavigate } from "react-router-dom";

const AirportSearch = () => {
  const input = useInput("");
  const navigate = useNavigate();
  const debounced = useDebounce<string>(input.value);
  const [airports, setAirports] = useState<IAirport[]>([]);
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    async function searchAirports() {
      const response = await axios.get<IAirport[]>("airports", {
        params: { q: debounced },
      });
      setAirports(response.data);
    }
    if (debounced.length > 3) {
      searchAirports().then(() => setDropdown(true));
    } else {
      setDropdown(false);
    }
  }, [debounced]);

  return (
    <div className="mb-4 relative">
      <input
        type="text"
        className="border py-2 px-4 outline-0 w-full h-[42px]"
        placeholder="Type here..."
        {...input}
      />

      {dropdown && (
        <ul className="absolute left-0 right-0 h-[200px] bg-white overflow-y-scroll top-[42px] shadow-md list-none">
          {airports.map((airport) => (
            <li
              className="py-2 px-4 mb-2 border hover:bg-gray-500 hover:transition-colors cursor-pointer hover:text-white"
              key={airport.id}
              onClick={() => navigate(`/airport/${airport.id}`)}
            >
              {airport.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AirportSearch;
