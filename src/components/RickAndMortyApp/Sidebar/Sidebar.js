import React, { useState } from "react";
import imgAjust from "../../../images/filtrar.png";
import "./Sidebar.css";

export default function Sidebar({ onSearch, onFilterChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAliveChecked, setIsAliveChecked] = useState(true);
  const [isDeadChecked, setIsDeadChecked] = useState(true);

  const handleFilterChange = (filter) => {
    onFilterChange(filter);
  };

  return (
    <div
      className={`Sidebar ${isOpen ? "open" : "closed"} container boxSidebar`}
    >
      {isOpen && (
        <form
          className=" "
          role="search"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            className=""
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(event) => onSearch(event.target.value)}
          />
          <input
            type="checkbox"
            checked={isAliveChecked}
            onChange={() => {
              setIsAliveChecked(!isAliveChecked);
              handleFilterChange({ isAliveChecked: !isAliveChecked });
            }}
          />{" "}
          Vivo
          <input
            type="checkbox"
            checked={isDeadChecked}
            onChange={() => {
              setIsDeadChecked(!isDeadChecked);
              handleFilterChange({ isDeadChecked: !isDeadChecked });
            }}
          />{" "}
          Muerto
        </form>
      )}
      <img
        className="btnSidebar"
        src={imgAjust}
        alt="Ajustes"
        onClick={() => setIsOpen(!isOpen)}
      />
    </div>
  );
}
